import React from "react";
import "../../Styles/footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__top d-sm-none d-md-block">
          <div className="row">
            <div className="col-4 col-xl-4 col-lg-6 col-md-6 col-left">
              <p className="footer__title">TIX</p>
              <div className="row">
                <div className="col-6">
                  <a href="">FAQ</a>
                  <a href="">Brand Guidelines</a>
                </div>
                <div className="col-6">
                  <a href="">Thỏa thuận sử dụng</a>
                  <a href="">Chính sách bảo mật</a>
                </div>
              </div>
            </div>
            <div className="col-4 col-xl-4 d-none d-xl-block col-middle">
              <p className="footer__title">Đối tác</p>
              <div className="row">
                <div className="col-12 mb-3">
                  <a href="">
                    <img src="/img/cgv.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/bhd.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/galaxycine.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/cinestar.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/lotte-cinema.png" alt />
                  </a>
                </div>
              </div>
              <div className="row col-12 mb-3">
                <div className="col-12">
                  <a href="">
                    <img src="/img/mega.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/AGRIBANK.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/VIETTINBANK.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/zalo-logo.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/IVB.png" alt />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 col-xl-4 col-lg-6 col-md-6 col-right">
              <div className="row">
                <div className="col-6">
                  <p className="footer__title">MOBILE APP</p>
                  <a href="">
                    <img src="/img/apple-logo.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/android-logo.png" alt />
                  </a>
                </div>
                <div className="col-6">
                  <p className="footer__title">SOCIAL</p>
                  <a href="">
                    <img src="/img/facebook-logo.png" alt />
                  </a>
                  <a href="">
                    <img src="/img/zalo-logo.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__top-formobile mt-3 d-sm-block d-md-none">
          <div className="row">
            <div className="col-6 footer__top-formobile-left">
              <a href="">Thỏa thuận sử dụng</a>
              <a href="">
                <img src="/img/facebook-logo.png" alt />
              </a>
            </div>
            <div className="col-6 footer__top-formobile-right">
              <a href="">Chính sách bảo mật</a>
              <a href="">
                <img src="/img/zalo-logo.png" alt />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom mt-3">
          <div className="row">
            <div className="col-md-2 col-sm-12 footer__bottom-img-left">
              <img src="/img/zion-logo.jpg" alt />
            </div>
            <div className="col-md-7 col-sm-12 footer__bottom-info">
              <span className="footer__bottom-info-title">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </span>
              <span>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </span>
              <span>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </span>
              <span>
                Số Điện Thoại (Hotline): 1900545436
                <br />
                Email: <a href="">support@tix.vn</a>
              </span>
            </div>
            <div className="col-md-3 col-sm-12 footer__bottom-img-right">
              <img src="/img/bo-cong-thuong.png" alt />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
