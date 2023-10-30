import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="items">
      <h1 className="title">セルフレジのデモ</h1>
      <div className="item">
        <Link to="/scan">
          <img src="/images/scan.png" alt="scan" />
          <p>スキャン</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/payment">
          <img src="/images/payment.png" alt="payment" />
          <p>支払い</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/complete">
          <img src="/images/complete.png" alt="complete" />
          <p>完了</p>
        </Link>
      </div>
    </div>
  )
}