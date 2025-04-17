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

  const pages = [
    {
      id: "page1",
      frontText: ["Connect", "the", '"Đốt"'],
    },
    {
      id: "page2",
      text: [
        [
          {
            text: "Ở 2G Group, chúng tôi tin rằng giáo dục là câu chuyện về sự kiên trì, sáng tạo và trách nhiệm – những giá trị cốt lõi để tạo nên một hệ sinh thái bền vững, nơi mỗi cá nhân đều có cơ hội vươn tới phiên bản tốt nhất của chính mình, bước ra thế giới, trở thành một công dân toàn cầu có bản sắc.",
            highlight: true,
          },
        ],
      ],
    },
    {
      id: "page3",
      frontText: ["Mô", "hình", "3R3C"],
      backText: ["Mô", "hình", "3R3C"],
    },
    {
      id: "page4",
      text: [
        [
          { text: "3 tinh thần hướng tới: ", highlight: "true" },
          {
            text: "Resilience, Reimagine, Responsibility",
            highlight: true,
            color: "var(--secondary-golden)",
          },
        ],
        [
          {
            text: "Resilience:",
            highlight: true,
            color: "var(--secondary-golden)",
          },
          { text: " Sức mạnh của sự bền bỉ và nội lực.", highlight: "true" },
        ],
        [
          {
            text: "- Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo và mô hình kinh doanh.",
          },
        ],
        [
          {
            text: "- Luôn cập nhật xu hướng giáo dục toàn cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập.",
          },
        ],
        [
          {
            text: "- Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía cạnh từ giảng dạy đến quản trị.",
          },
        ],
      ],
    },
    {
      id: "page5",
      text: [
        [
          {
            text: "Reimagine:",
            highlight: true,
            color: "var(--secondary-golden)",
          },
          {
            text: "Sáng tạo và linh hoạt, dám thay đổi để bứt phá.",
            highlight: "true",
          },
        ],
        [
          {
            text: "- Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo và mô hình kinh doanh.",
          },
        ],
        [
          {
            text: "- Luôn cập nhật xu hướng giáo dục toàn cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập.",
          },
        ],
        [
          {
            text: "- Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía cạnh từ giảng dạy đến quản trị.",
          },
        ],
      ],
    },
    {
      id: "page6",
      text: [
        [
          {
            text: "Responsibility:",
            highlight: true,
            color: "var(--secondary-golden)",
          },
          {
            text: "Trách nhiệm và sự gắn kết bền chặt.",
            highlight: "true",
          },
        ],
        [
          {
            text: "- Cam kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự.",
          },
        ],
        [
          {
            text: "- Xây dựng môi trường làm việc đề cao sự gắn kết và phát triển cá nhân.",
          },
        ],
        [
          {
            text: "- Tạo ra tác động tích cực, không chỉ trong giáo dục mà còn trong cộng đồng.",
          },
        ],
      ],
    },
    {
      id: "page7",
      text: [
        [
          { text: "3 giá trị cốt lõi: ", highlight: "true" },
          {
            text: " Care, Credibility, Contribution",
            highlight: true,
            color: "var(--primary-red)",
          },
        ],
        [
          {
            text: "Sống tử tế (Care): ",
            highlight: true,
            color: "var(--primary-red)",
          },
          {
            text: "Sự tử tế không chỉ là một phẩm chất cá nhân mà còn là cách 2G vận hành mọi hoạt động. Tử tế trong cách giáo dục – luôn lắng nghe, thấu hiểu và hỗ trợ học viên, phụ huynh. Tử tế trong cách làm việc – tôn trọng, hợp tác chân thành với đồng đội và đối tác. Và tử tế với cộng đồng – lan tỏa những giá trị tốt đẹp, tạo nên môi trường học tập và làm việc đầy cảm hứng, nhân văn.",
          },
        ],
      ],
    },
    {
      id: "page8",
      text: [
        [
          {
            text: "Sống liêm chính (Credibility): ",
            highlight: true,
            color: "var(--primary-red)",
          },
          {
            text: " Chúng tôi tin rằng thành công bền vững phải dựa trên sự tin tưởng và cam kết lâu dài với học viên, đối tác và cộng đồng. Từ việc chú tâm xây dựng chương trình học, phương pháp đào tạo và giá trị thực sự để đảm bảo học viên nhận được đúng những gì họ cần, đến việc công khai mọi thông tin với đối tác và đội ngũ và luôn ưu tiên giữ vững đạo đức nghề nghiệp, chúng tôi luôn cố gắng hướng tới sự minh bạch và tạo ra môi trường học tập công bằng, hiệu quả.",
          },
        ],
      ],
    },
    {
      id: "page9",
      text: [
        [
          {
            text: "Sống cống hiến (Contribution):",
            highlight: true,
            color: "var(--primary-red)",
          },
          {
            text: "Chúng tôi tin rằng giáo dục có sức mạnh thay đổi cuộc sống và tạo ra những tác động tích cực lâu dài. Mỗi bước đi của 2G đều có sự tính toán đến ảnh hưởng đối với cộng đồng, hướng tới việc hỗ trợ học tập cho đa dạng các đối tượng, đặc biệt là các bạn trẻ có hoàn cảnh khó khăn. Vì vậy, 2G Group đã lập ra quỹ giáo dục Glocal Villagers, liên tục tổ chức các hoạt động xã hội hàng năm, và không ngừng xây dựng những chương trình mang lại giá trị thực cho cộng đồng.",
          },
        ],
      ],
    },
    {
      id: "page10",
      text: [
        [{ text: "3 câu chuyện biểu tượng:", highlight: "true" }],
        [
          {
            text: "Câu chuyện cây tre: ",
            highlight: true,
            color: "var(--primary-green)",
            weight: "800",
          },
          {
            text: "Sự tử tế không chỉ là một phẩm chất cá nhân mà còn là cách 2G vận hành mọi hoạt động. Tử tế trong cách giáo dục – luôn lắng nghe, thấu hiểu và hỗ trợ học viên, phụ huynh. Tử tế trong cách làm việc – tôn trọng, hợp tác chân thành với đồng đội và đối tác. Và tử tế với cộng đồng – lan tỏa những giá trị tốt đẹp, tạo nên môi trường học tập và làm việc đầy cảm hứng, nhân văn.",
          },
        ],
      ],
    },
    {
      id: "page11",
      text: [
        [
          {
            text: "Câu chuyện the dots: ",
            highlight: true,
            color: "var(--primary-green)",
            weight: "800",
          },
          {
            text: "Lấy cảm hứng từ câu chuyện của Steve Jobs, người từng kể về những “dấu chấm” trong đời mình: bỏ đại học, học thư pháp, làm việc không mục đích rõ ràng, dường như trong thời điểm đó, mọi thứ Steve Jobs làm đều chưa có ý nghĩa rõ ràng. Nhưng khi nhìn lại, anh nhận ra chính những dấu chấm ấy – sự tò mò, những bước đi lệch hướng – đã nối lại để tạo nên những viên gạch vững chắc cho Apple - một thương hiệu đã thay đổi cả thế giới công nghệ. Ở 2G Group, chúng tôi sống với tinh thần ấy. Mỗi ý tưởng mới, mỗi ứng dụng công nghệ, mỗi thay đổi trong cách dạy và học, mỗi cá nhân thành công ",
          },
        ],
      ],
    },
    {
      id: "page12",
      text: [
        [
          {
            text: "trong việc bước ra thế giới là một dấu chấm nhỏ. Chúng tôi tin vào việc nối những dấu chấm nhỏ đó, biến sự ngẫu nhiên thành sáng tạo, biến câu chuyện cá nhân thành cảm hứng cộng đồng, từ đó tạo ra một mạng lưới những cá nhân xuất sắc, dám sống và dám mơ. ",
          },
        ],
        [
          {
            text: "Câu chuyện connect the “đốt”:  ",
            highlight: true,
            color: "var(--primary-green)",
            weight: "800",
          },
          {
            text: "Tre cắm rễ, vươn từng đốt. Dấu “dots” nhỏ, ý tưởng lớn. 2G Group biến Connect the dots thành Connect the “đốt” với tham vọng phá bỏ rào cản giáo dục toàn cầu, xây dựng một hệ sinh thái giáo dục, gắn thế hệ trẻ với tri thức, vững gốc mà vươn xa.",
          },
        ],
      ],
    },
  ];

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
          <p>3 tinh thần hướng tới: Resilience, Reimagine, Responsibility</p>
          <br />
          <p>3 giá trị cốt lõi: Care, Credibility, Contribution</p>
          <br />
          <p>3 câu chuyện biểu tượng</p>
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
        </div>
      </div>

      <div className="page">
        <div className="front">
          <h3>3 tinh thần hướng tới: Resilience, Reimagine, Responsibility</h3>
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
        <div className="back">
          <h3>3 câu chuyện biểu tượng:</h3>
          <h4>Câu chuyện cây tre:</h4>
          <p>
            Tre không vội vã. Tre cắm rễ sâu, tích tụ sức mạnh, rồi vươn thẳng
            lên trời – mạnh mẽ nhưng vô cùng linh hoạt. Đó cũng là lí do 2G
            Group lấy hình ảnh cây tre làm hình ảnh biểu tượng chủ đạo.
          </p>
          <p>
            {" "}
            Founder của 2G Group - anh Lê Văn Hải đã từng chia sẻ, càng trưởng
            thành, anh càng cảm nhận sâu sắc gốc rễ – gia đình, cộng đồng, và di
            sản Việt Nam đã định hình anh. Với anh, cây tre không chỉ là một
            loại cây, mà là biểu tượng của bản sắc.
          </p>
        </div>
      </div>
      <div className="page">
        <div className="front">
          <p>
            Sẽ mất hàng năm để rễ tre đan xen cắm chặt dưới lòng sâu trước khi
            vươn thẳng lên trời, mạnh mẽ và nhanh chóng. Anh học từ đó: muốn
            vươn cao, phải xây nền móng vững – trong công việc, trong đời sống.
            Tre phát triển theo từng cụm và lớn lên theo từng đốt, luôn hướng
            tới mây xanh. Đó cũng là hình ảnh mà anh muốn mọi người liên tưởng
            tới khi biết đến 2G Group. 2G Group kiên nhẫn xây dựng nền tảng – từ
            chất lượng đào tạo, chất lượng con người đến sự minh bạch trong vận
            hành – để tạo nên một hệ thống giáo dục bền vững, nơi mọi cá nhân
            cùng vươn lên từ gốc rễ mạnh mẽ của chính mình.
          </p>
        </div>
        <div className="back">
          <h4>Câu chuyện the dots:</h4>
          <p>
            Lấy cảm hứng từ câu chuyện của Steve Jobs, người từng kể về những
            “dấu chấm” trong đời mình: bỏ đại học, học thư pháp, làm việc không
            mục đích rõ ràng, dường như trong thời điểm đó, mọi thứ Steve Jobs
            làm đều chưa có ý nghĩa rõ ràng.
          </p>
          <p>
            Nhưng khi nhìn lại, anh nhận ra chính những dấu chấm ấy – sự tò mò,
            những bước đi lệch hướng – đã nối lại để tạo nên những viên gạch
            vững chắc cho Apple - một thương hiệu đã thay đổi cả thế giới công
            nghệ.
          </p>
        </div>
      </div>
      <div className="page">
        <div className="front">
          <p>
            Ở 2G Group, chúng tôi sống với tinh thần ấy. Mỗi ý tưởng mới, mỗi
            ứng dụng công nghệ, mỗi thay đổi trong cách dạy và học, mỗi cá nhân
            thành công trong việc bước ra thế giới là một dấu chấm nhỏ. Chúng
            tôi tin vào việc nối những dấu chấm nhỏ đó, biến sự ngẫu nhiên thành
            sáng tạo, biến câu chuyện cá nhân thành cảm hứng cộng đồng, từ đó
            tạo ra một mạng lưới những cá nhân xuất sắc, dám sống và dám mơ.
          </p>
        </div>
        <div className="back">
          <h4>Câu chuyện connect the “đốt”</h4>
          <p>
            Tre cắm rễ, vươn từng đốt. Dấu “dots” nhỏ, ý tưởng lớn. 2G Group
            biến Connect the dots thành Connect the “đốt” với với ý nghĩa mong
            muốn phá bỏ rào cản giáo dục toàn cầu, xây dựng một hệ sinh thái
            giáo dục toàn diện, gắn thế hệ trẻ với tri thức, vững gốc mà vươn
            xa.
          </p>
        </div>
      </div>
      <div className="page">
        <div className="front">
          <img src="https://img.freepik.com/free-vector/wooden-bridge-bamboo-forest_1308-33142.jpg?semt=ais_hybrid&w=740" alt="Img 1" />
        </div>
        <div className="back cover"></div>
      </div>
    </div>
  );
};

export default FlipBook;
