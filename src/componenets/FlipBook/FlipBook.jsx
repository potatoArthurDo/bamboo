import React, { useEffect, useRef } from "react";
import "./FlipBook.css";

const FlipBook = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    const elBook = bookRef.current;
    if (!elBook) return;

    elBook.style.setProperty("--c", 0);

    const pages = elBook.querySelectorAll(".page");
    pages.forEach((page, idx) => {
      page.style.setProperty("--i", idx);

      const handleClick = (evt) => {
        if (evt.target.closest("a")) return;
        const curr = evt.target.closest(".back") ? idx : idx + 1;
        elBook.style.setProperty("--c", curr);
      };

      page.addEventListener("click", handleClick);

      // Optional cleanup
      return () => {
        page.removeEventListener("click", handleClick);
      };
    });
  }, []);

  return (
    <div className="book" ref={bookRef}>
      <div className="page">
        <div className="front cover">
          <img src="assets/images/logo.png" alt="" />
          <div className="book-intro">
            <h1>Connect</h1>
            <h1>the</h1>
            <h1>Đốt</h1>
          </div>
        </div>
        <div className="back">
          <img src="/assets/images/intro_1.jpg" alt="" />
        </div>
      </div>
      <div className="page">
        <div className="front">
          <img src="/assets/images/intro_2.jpg" alt="" />
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "4rem" }}>3 câu chuyện biểu tượng</h1>
        </div>
      </div>
      <div className="page">
        <div
          className="front"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "3rem" }}>Câu chuyện cây tre</h1>
        </div>
        <div className="back">
          <img src="/assets/images/book_1_1.jpg" alt="" />
        </div>
      </div>
      <div className="page">
        <div className="front">
          <img src="/assets/images/book_1_2.jpg" alt="" />
        </div>
        <div className="back">
          <img src="/assets/images/book_2_1.jpg" alt="" />
        </div>
      </div>
      <div className="page">
        <div className="front">
          <img src="/assets/images/book_2_2.jpg" alt="" />
        </div>
        <div className="back">
          <img src="/assets/images/book_3_1.jpg" alt="" />
        </div>
      </div>
      <div className="page">
        <div className="front">
          <img src="/assets/images/book_3_2.jpg" alt="" />
        </div>
        <div className="back">
          <img src="assets/images/TheDots_1.jpg" alt="" />
        </div>
      </div>
      <div className="page">
        <div className="front">
          <img src="assets/images/TheDots_2.jpg" alt="" />
        </div>
        <div className="back">
          <img src="assets/images/ConnectTheDot_1.jpg" alt="" />
        </div>
      </div>
      <div className="page">
        <div className="front">
          <img src="assets/images/ConnectTheDot_2.jpg" alt="" />
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: "4rem" }}>3 tinh thần hướng tới</h3>
        </div>
      </div>

      <div className="page">
        <div
          className="front"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h4 style={{ fontSize: "2.5rem" }}>Resilience</h4>
          <h4 style={{ fontSize: "2.5rem" }}>Reimagine</h4>
          <h4 style={{ fontSize: "2.5rem" }}>Responsibility</h4>
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "13rem" }}>R</h1>
          <h5 style={{ fontSize: "2.8rem" }}>Resilience</h5>
          <h6 style={{ fontSize: "1.4rem" }}>Bền Bỉ</h6>
        </div>
      </div>

      <div className="page">
        <div className="front">
          <h4>Resilience: Sức mạnh của sự bền bỉ và nội lực</h4>
          <ul>
            <li>
              Tập trung xây dựng nền tảng vững chắc trong đào tạo và vận hành.
            </li>
            <li>Luôn đặt chất lượng trên lợi ích ngắn hạn.</li>
            <li>
              Kiên trì theo đuổi giá trị cốt lõi, tin vào nội lực bên trong của
              mỗi người.
            </li>
          </ul>
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "13rem" }}>R</h1>
          <h5 style={{ fontSize: "2.8rem" }}>Reimagine</h5>
          <h6 style={{ fontSize: "1.4rem" }}>Tái tạo</h6>
        </div>
      </div>

      <div className="page">
        <div className="front">
          <h4>Reimagine: Sáng tạo và linh hoạt, dám thay đổi để bứt phá</h4>
          <ul>
            <li>
              Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo và mô
              hình kinh doanh.
            </li>
            <li>
              Luôn cập nhật xu hướng giáo dục toàn cầu, ứng dụng công nghệ để
              tối ưu trải nghiệm học tập.
            </li>
            <li>
              Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía
              cạnh từ giảng dạy đến quản trị.
            </li>
          </ul>
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "13rem" }}>R</h1>
          <h5 style={{ fontSize: "2.8rem" }}>Responsibility</h5>
          <h6 style={{ fontSize: "1.4rem" }}>Trách Nhiệm</h6>
        </div>
      </div>

      <div className="page">
        <div className="front">
          <h4>Responsibility: Trách nhiệm và sự gắn kết bền chặt</h4>
          <ul>
            <li>
              Cam kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự.
            </li>
            <li>
              Xây dựng môi trường làm việc đề cao sự gắn kết và phát triển cá
              nhân.
            </li>
            <li>
              Tạo ra tác động tích cực, không chỉ trong giáo dục mà còn trong
              cộng đồng.
            </li>
          </ul>
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: "4rem" }}>3 giá trị cốt lõi</h3>
        </div>
      </div>

      <div className="page">
        <div
          className="front"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h4 style={{ fontSize: "2.5rem" }}>Care</h4>
          <h4 style={{ fontSize: "2.5rem" }}>Credibility</h4>
          <h4 style={{ fontSize: "2.5rem" }}>Contribution</h4>
        </div>

        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "13rem" }}>C</h1>
          <h5 style={{ fontSize: "2.8rem" }}>Care</h5>
          <h6 style={{ fontSize: "1.4rem" }}>Sống Tử Tế</h6>
        </div>
      </div>
      <div className="page">
        <div className="front">
          <h4>Sống tử tế (Care)</h4>
          <p>
            {" "}
            Sự tử tế không chỉ là một phẩm chất cá nhân mà còn là cách 2G vận
            hành mọi hoạt động. Tử tế trong cách giáo dục – luôn lắng nghe, thấu
            hiểu và hỗ trợ học viên, phụ huynh. Tử tế trong cách làm việc – tôn
            trọng, hợp tác chân thành với đồng đội và đối tác. Và tử tế với cộng
            đồng – lan tỏa những giá trị tốt đẹp, tạo nên môi trường học tập và
            làm việc đầy cảm hứng, nhân văn.
          </p>
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "13rem" }}>C</h1>
          <h5 style={{ fontSize: "2.8rem" }}>Credibility</h5>
          <h6 style={{ fontSize: "1.4rem" }}>Sống Liêm Chính</h6>
        </div>
      </div>
      <div className="page">
        <div className="front">
          <h4>Sống liêm chính (Credibility)</h4>
          <p>
            {" "}
            Chúng tôi tin rằng thành công bền vững phải dựa trên sự tin tưởng và
            cam kết lâu dài với học viên, đối tác và cộng đồng. Từ việc chú tâm
            xây dựng chương trình học, phương pháp đào tạo và giá trị thực sự để
            đảm bảo học viên nhận được đúng những gì họ cần, đến việc công khai
            mọi thông tin với đối tác và đội ngũ và luôn ưu tiên giữ vững đạo
            đức nghề nghiệp, chúng tôi luôn cố gắng hướng tới sự minh bạch và
            tạo ra môi trường học tập công bằng, hiệu quả.
          </p>
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "13rem" }}>C</h1>
          <h5 style={{ fontSize: "2.8rem" }}>Contribution</h5>
          <h6 style={{ fontSize: "1.4rem" }}>Sống Cống Hiến</h6>
        </div>
      </div>

      <div className="page">
        <div className="front">
          <h4>Sống cống hiến (Contribution)</h4>
          <p>
            {" "}
            Chúng tôi tin rằng giáo dục có sức mạnh thay đổi cuộc sống và tạo ra
            những tác động tích cực lâu dài. Mỗi bước đi của 2G đều có sự tính
            toán đến ảnh hưởng đối với cộng đồng, hướng tới việc hỗ trợ học tập
            cho đa dạng các đối tượng, đặc biệt là các bạn trẻ có hoàn cảnh khó
            khăn. Vì vậy, 2G Group đã lập ra quỹ giáo dục Glocal Villagers, liên
            tục tổ chức các hoạt động xã hội hàng năm, và không ngừng xây dựng
            những chương trình mang lại giá trị thực cho cộng đồng.
          </p>
        </div>
        <div className="back cover"></div>
      </div>

      {/* <div className="page">
        <div
          className="front"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="assets/images/favicon.png"
            alt=""
            style={{ height: "auto", width: "17rem" }}
          />
        </div>
        <div className="back cover"></div>
      </div> */}
    </div>
  );
};

export default FlipBook;
