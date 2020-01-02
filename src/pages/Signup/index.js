import React from "react";
import "./index.scss";

class Signup extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="head" />
        <div className="signup_body">
          <div className="move_signin">
            <span className="account">이미 계정이 있으신가요?</span>
            <span className="login">로그인</span>
          </div>
          <div className="make_account">
            <h2>계정 만들기</h2>
            <hr />
            <div className="signup_info">
              <div className="info firstname">
                <input className="input" type="text" placeholder="이름" />
              </div>
              <div className="info lastname">
                <input className="input" type="text" placeholder="성" />
              </div>
              <div className="info email">
                <input className="input" type="text" placeholder="이메일주소" />
              </div>
              <div className="info password">
                <input
                  className="input"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="info confirmpassword">
                <input
                  className="input"
                  type="password"
                  placeholder="비밀번호를 다시 입력해 주십시오."
                />
                <p className="psw_condition">
                  최소 8자이며 1개의 문자와 숫자가 포함되어야 합니다.
                </p>
              </div>
            </div>
            <div className="checkbox_area">
              <div className="checkbox_container">
                <input className="checkbox" type="checkbox" name="consent" />
              </div>
              <div className="checkbox_text">
                Tesla의{" "}
                <a
                  class="consent"
                  target="_blank"
                  href="https://www.tesla.com/ko_KR/about/legal?redirect=no"
                >
                  개인정보처리방침
                </a>{" "}
                에 따른 개인정보 수집∙이용 및 국내외 사업자에 대한 개인정보
                제공에 동의 합니다.
              </div>
            </div>
            <div className="checkbox_area">
              <div className="checkbox_container">
                <input className="checkbox" type="checkbox" />
              </div>
              <div className="checkbox_text">
                Tesla 업데이트: Tesla e-뉴스, 이벤트 및 제품 업데이트 소식
                수신을 동의합니다. 언제든지 구독 중지할 수 있습니다.
                <a
                  className="consent"
                  href="https://www.tesla.com/ko_KR/about/legal?redirect=no#tesla-updates"
                >
                  (자세히 보기)
                </a>
              </div>
            </div>
            <div className="do_signup">
              <button>계정만들기</button>
            </div>
            <div className="agree">
              <div>
                계정을 생성하면{" "}
                <a
                  className="consent private_info"
                  href="https://www.tesla.com/ko_KR/about/legal?redirect=no#privacy-statement"
                >
                  고객 개인정보 취급방침
                </a>{" "}
                과
                <a
                  className="consent regulation"
                  href="https://www.tesla.com/ko_KR/about/legal?redirect=no#supercharger-fair-use"
                >
                  수퍼차저 공정 이용 정책
                </a>{" "}
                정책에 동의하시는 것입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
