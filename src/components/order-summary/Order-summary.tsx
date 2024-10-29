import React from "react";
import styles from "./Order-summary.module.scss";
function OrderSummary() {
  return (
    <section className={styles.orderSummaryWrapper}>
      <h3>Your cart</h3>
      <section className={styles.cartDetails}>
        <article className={styles.orderItemsSummary}>
          <article>
            <section>
              <div>
                <img
                  src="https://cdn.aboutstatic.com/file/images/896ecf7ab7c835a7c0c974198dbb15a6.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960"
                  alt=""
                />
              </div>
              <div>
                <h5>Nike sportswear</h5>
                <p>Obleklo za bqgane</p>
                <p>Size: M</p>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </section>
            <section>
              <button>
                <i className="fa-solid fa-trash"></i>
              </button>
              <p>212.90</p>
            </section>
          </article>
        </article>
        <article className={styles.orderPaymentSummary}>
          <div>
            <span>Obshto</span>
            <span>212</span>
          </div>
          <div>
            <span>Dostavka i obslujvane</span>
            <span>212</span>
          </div>
          <div>
            <h3>
              Plashtash <span>s dds</span>
            </h3>
            <span>212</span>
          </div>
          <button>Prodylji kym plasthane</button>
          <div className={styles.paymentProviders}>
            <img
              src="https://cdn.aboutstatic.com/file/562897eff981d3bae39b47470cc74638.png?quality=75&height=75&width=150"
              alt=""
            />
            <img
              src="https://cdn.aboutstatic.com/file/63a5cdd59037df161a7bc20492ec83cb.png?quality=75&height=75&width=150"
              alt=""
            />
            <img
              src="https://cdn.aboutstatic.com/file/153dfa6b847db02949b02b1931ea260e?quality=75&height=75&width=150"
              alt=""
            />
            <img
              src="https://cdn.aboutstatic.com/file/6d6e379c0368193b30afa4735c438cbd.png?quality=75&height=75&width=150"
              alt=""
            />
            <img
              src="https://cdn.aboutstatic.com/file/b35a1d71b07da824fc6c5fc44d6f86ff.png?quality=75&height=75&width=150"
              alt=""
            />
            <img
              src="https://cdn.aboutstatic.com/file/36a56822730605c5a8672512ce9025c1.png?quality=75&height=75&width=150"
              alt=""
            />
          </div>
        </article>
      </section>
    </section>
  );
}

export default OrderSummary;
