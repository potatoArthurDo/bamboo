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
          <h2>Mục đích của 2G</h2>
          <p>
            Ở 2G Group, chúng tôi tin rằng giáo dục là câu chuyện về sự kiên
            trì, sáng tạo và trách nhiệm – những giá trị cốt lõi để tạo nên một
            hệ sinh thái bền vững, nơi mỗi cá nhân đều có cơ hội vươn tới phiên
            bản tốt nhất của chính mình, bước ra thế giới, trở thành một công
            dân toàn cầu có bản sắc. MÔ HÌNH 3R3C.
          </p>
        </div>
      </div>
      <div className="page">
        <div className="front">
          <p>3 câu chuyện biểu tượng</p>
          <br />
          <p>3 tinh thần hướng tới: Resilience, Reimagine, Responsibility</p>
          <br />
          <p>3 giá trị cốt lõi: Care, Credibility, Contribution</p>
          <br />
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
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem" }}>Câu chuyện the dots</h1>
          <p style={{ fontSize: "1rem" }}>
            {" "}
            Lấy cảm hứng từ câu chuyện của Steve Jobs, người từng kể về những
            “dấu chấm” trong đời mình: bỏ đại học, học thư pháp, làm việc không
            mục đích rõ ràng, dường như trong thời điểm đó, mọi thứ Steve Jobs
            làm đều chưa có ý nghĩa rõ ràng.{" "}
          </p>
        </div>
      </div>
      <div className="page">
        <div className="front">
          <p style={{ fontSize: "1rem" }}>
            Nhưng khi nhìn lại, anh nhận ra chính những dấu chấm ấy – sự tò mò,
            những bước đi lệch hướng – đã nối lại để tạo nên những viên gạch
            vững chắc cho Apple - một thương hiệu đã thay đổi cả thế giới công
            nghệ.
          </p>
          <p style={{ fontSize: "1rem" }}>
            Ở 2G Group, chúng tôi sống với tinh thần ấy. Mỗi ý tưởng mới, mỗi
            ứng dụng công nghệ, mỗi thay đổi trong cách dạy và học, mỗi cá nhân
            thành công trong việc bước ra thế giới là một dấu chấm nhỏ. Chúng
            tôi tin vào việc nối những dấu chấm nhỏ đó, biến sự ngẫu nhiên thành
            sáng tạo, biến câu chuyện cá nhân thành cảm hứng cộng đồng, từ đó
            tạo ra một mạng lưới những cá nhân xuất sắc, dám sống và dám mơ.
          </p>
        </div>
        <div
          className="back"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "2.5rem" }}>Câu chuyện connect the “đốt”</h1>
          <p>Tre cắm rễ, vươn từng đốt.</p>
          <p>Dấu “dots” nhỏ, ý tưởng lớn.</p>
          <p>
            2G Group biến Connect the dots thành Connect the “đốt” với với ý
            nghĩa mong muốn phá bỏ rào cản giáo dục toàn cầu, xây dựng một hệ
            sinh thái giáo dục toàn diện, gắn thế hệ trẻ với tri thức, vững gốc
            mà vươn xa.
          </p>
        </div>
      </div>
      <div className="page">
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
            fontSize: "2.5rem",
            gap: "1rem",
          }}
        >
          <h4>Resilience</h4>
          <h4>Reimagine</h4>
          <h4>Responsibility</h4>
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
          <h1 style={{ fontSize: "15rem" }}>R</h1>
          <h5 style={{ fontSize: "3rem" }}>Resilience</h5>
          <h6 style={{ fontSize: "2rem" }}>Bền Bỉ</h6>
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
          <h1 style={{ fontSize: "15rem" }}>R</h1>
          <h5 style={{ fontSize: "3rem" }}>Reimagine</h5>
          <h6 style={{ fontSize: "2rem" }}>Tái tạo</h6>
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
          <h1 style={{ fontSize: "15rem" }}>R</h1>
          <h5 style={{ fontSize: "3rem" }}>Responsibility</h5>
          <h6 style={{ fontSize: "2rem" }}>Trách Nhiệm</h6>
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
          <h1 style={{ fontSize: "15rem" }}>C</h1>
          <h5 style={{ fontSize: "3rem" }}>Care</h5>
          <h6 style={{ fontSize: "2rem" }}>Sống Tử Tế</h6>
        </div>
      </div>

      <div className="page">
        <div className="front">
          <h3>3 giá trị cốt lõi: Care, Credibility, Contribution</h3>
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
          <h1 style={{ fontSize: "15rem" }}>C</h1>
          <h5 style={{ fontSize: "3rem" }}>Credibility</h5>
          <h6 style={{ fontSize: "2rem" }}>Sống Liêm Chính</h6>
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
          <h1 style={{ fontSize: "15rem" }}>C</h1>
          <h5 style={{ fontSize: "3rem" }}>Contribution</h5>
          <h6 style={{ fontSize: "2rem" }}>Sống Cống Hiến</h6>
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
