import React, {useState} from 'react';
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
  
export default function Payment(){
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "#87bbfd"
      }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
};

const CardField = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);


const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

const ResetButton = ({ onClick }) => (
  <button type="button" className="ResetButton" onClick={onClick}>
      <img src="../img/TIX-logo.png" alt="H??nh ???nh" style={{width:"40px", height:"40px"}}></img>
  </button>
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    console.log(stripe);


    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: billingDetails
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
  };
   if(paymentMethod) {
     localStorage.setItem("PaymentInfo", JSON.stringify(processing));
 }

  const reset = () => {
      window.location = "/userInfo"
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" style={{color:"#fff", fontSize:"25px", fontWeight:"bold"}} role="alert">
        Payment successful
      </div>
      <div className="ResultMessage" style={{color:"#fff"}}>
        Thanks for buying ticket. We hope you will have wonderful experiences at Tix.
      </div>
      <ResetButton onClick={reset} />
    </div>
  ) : (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Nguyen Van A"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="abc@gmail.com"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, email: e.target.value });
          }}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(941) 555-0123"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value });
          }}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Pay
      </SubmitButton>
    </form>
  );
};

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
    }
  ]
};
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");


    return (
        <div className="background-payment d-block" style={{width:"100%", height:"750px", opacity:"0.8", backgroundImage:"url(../img/background-phim.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center center"}}>
            <h2 className="py-4" style={{color:"#fff", textAlign:"center"}}>Thanh to??n</h2>
            <div className="AppWrapper" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                     <CheckoutForm />
            </Elements>
            </div>
        </div>
    )
}
