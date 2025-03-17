import { Scroll, useScroll } from "@react-three/drei";
import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./overlay.css";
const Section = (props) => {
  return (
    <section style={{ opacity: props.opacity }}>
      <div className={props.sectionName}>{props.children}</div>
    </section>
  );
};

export const ContentOverlay = () => {
  const scroll = useScroll();
  const navigate = useNavigate();
  const [opacity1, setOpacitySection1] = useState(1);
  const [opacity2, setOpacitySection2] = useState(0);
  const [opacity3, setOpacitySection3] = useState(0);
  const [opacity4, setOpacitySection4] = useState(0);
  const [opacity5, setOpacitySection5] = useState(0);
  const [opacity6, setOpacitySection6] = useState(0);
  const [opacity7, setOpacitySection7] = useState(0);
  const [opacity8, setOpacitySection8] = useState(0);
  const [opacity9, setOpacitySection9] = useState(0);

  useFrame(() => {
    setOpacitySection1(1 - scroll.range(0, 1 / 9));
    setOpacitySection2(scroll.curve(1 / 9, 1 / 9));
    setOpacitySection3(scroll.curve(2 / 9, 1 / 9));
    setOpacitySection4(scroll.curve(3 / 9, 1 / 9));
    setOpacitySection5(scroll.curve(4 / 9, 1 / 9));
    setOpacitySection6(scroll.curve(5 / 9, 1 / 9));
    setOpacitySection7(scroll.curve(6 / 9, 1 / 9));
    setOpacitySection8(scroll.curve(7 / 9, 1 / 9));
    setOpacitySection9(scroll.range(8 / 9, 1 / 9)); // Adjusted for 9 sections
  });

  return (
    <Scroll html className="scroll-html-wrapper">
      <div className="w-screen">
        <Section opacity={opacity1} sectionName="intro">
          <h3 className="company_name">2G Education</h3>
          <h1 className="main_name">GLOCAL</h1>
          <h1 className="main_name">TREE</h1>
          <p className="journey-quote">The journey 2G Education</p>
          <p className="bounce mt-6">↓</p>
        </Section>
        <Section opacity={opacity2} sectionName="feedback">
          <h1>Customer </h1>
          <h1> Feedback</h1>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cLNyF1Zw5tg?si=jJi9zINBoqG6QSHI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p className="bounce">↓</p>
        </Section>

        <Section opacity={opacity3} sectionName="achievement">
          <h1>Our </h1>
          <h1> Achievements</h1>
          <div className="timeline">
            <div className="timeline-item">
              <div className="content">
                <h3>2018</h3>
                <p>Tiên Phong Tổ Chức Trại Hè Quốc Tế</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="content">
                <h3>2018</h3>
                <p> Đối Tác Chiến Lược Với AIT TESOL Úc</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="content">
                <h3>2019</h3>
                <p>
                  Đơn Vị Tổ Chức Cuộc Thi Hùng Biện Lớn Nhất Nghệ An & Hà Tĩnh
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="content">
                <h3>2020</h3>
                <p>IỨng Dụng Công Nghệ & Hợp Tác Quốc Tế Trong Giảng Dạy</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="content">
                <h3>2021</h3>
                <p>Đồng Hành Cùng Chuyên Gia Quốc Tế – Peter Wright</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="content">
                <h3>2022</h3>
                <p>
                  Đối Tác Cùng Đài Truyền Hình & Sở Giáo Dục Nghệ An Tổ Chức
                  Cuộc Thi “English Challenge”
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="content">
                <h3>2023</h3>
                <p>
                  World Scholar’s Cup. 100% Ội Tuyển Vượt Qua Vòng Khu Vực Tại
                  Bangkok, Thái Lan
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="content">
                <h3>2024</h3>
                <p>Đạt Chuẩn Trung Tâm Du Học Quốc Tế ICEF</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="content">
                <h3>2023 – 2024</h3>
                <p> Dẫn Đầu Trong Luyện Thi IELTS – Kỷ Lục Học Sinh Đạt 6.5+</p>
              </div>
            </div>
          </div>
          <p className="bounce mt-6">↓</p>
        </Section>

        <Section opacity={opacity4} sectionName="service">
          <h1>Our </h1>
          <h1> Service</h1>
          <div className="product-container">
            <div className="product-card">
              <img
                src="https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f27fa05d2f7629655beafeb9248c7647"
                alt=""
              />
              <h4>2G Education</h4>
              <h5>Học ngoại ngữ, mở tương lai</h5>
              <p className="service-intro">
                Giúp bạn chinh phục ngoại ngữ với chương trình đào tạo bài bản,
                mở ra cơ hội học tập và sự nghiệp toàn cầu.{" "}
              </p>
              <p>- Đào tạo đa ngôn ngữ: Tiếng Anh, Tiếng Trung, Tiếng Đức.</p>
              <p>- Luyện thi IELTS, THPT Chuyên với lộ trình cá nhân hoá.</p>
              <p>
                - Tiếng Anh giao tiếp & tiếng Anh trẻ em theo phương pháp tư duy
                phản xạ.
              </p>
            </div>

            <div className="product-card">
              <img
                src="https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f27fa05d2f7629655beafeb9248c7647"
                alt=""
              />
              <h4>2G Pathways</h4>
              <h5>Hành trình du học trọn gói từ A-Z</h5>
              <p className="service-intro">
                Dịch vụ tư vấn du học toàn diện, đồng hành từ khâu định hướng
                đến khi đặt chân tới nước ngoài.
              </p>
              <p>- Tư vấn du học tại Anh, Mỹ, Úc, Canada, New Zealand.</p>
              <p>- Xây dựng lộ trình cá nhân hoá, tối ưu hồ sơ và học bổng.</p>
              <p>- Hỗ trợ toàn diện từ chuẩn bị giấy tờ đến phỏng vấn visa.</p>
            </div>

            <div className="product-card">
              <img
                src="https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f27fa05d2f7629655beafeb9248c7647"
                alt=""
              />
              <h4>2G Eureka Camps</h4>
              <h5>Cung cấp các giải pháp về mô hình trại hè</h5>
              <p className="service-intro">
                Trại hè đầu tiên tại Nghệ An mang đến hành trình khám phá văn
                hoá và phát triển kỹ năng tại các quốc gia hàng đầu.
              </p>
              <p>
                - Trại hè trao đổi tại Úc, New Zealand, Singapore dành cho trẻ
                5-12 tuổi.
              </p>
              <p>
                Chương trình kết hợp học tập, kỹ năng mềm & tư duy sáng tạo và
                phản biện.{" "}
              </p>
              <p>
                - Môi trường quốc tế giúp trẻ tự tin và phát triển toàn diện.
              </p>
            </div>

            <div className="product-card">
              <img
                src="https://i.guim.co.uk/img/media/8c7f4fe66d305fb86fc3246dd47a9c06d216f7ec/0_139_1268_761/master/1268.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f27fa05d2f7629655beafeb9248c7647"
                alt=""
              />
              <h4>GV Manpower</h4>
              <h5>Cung cấp dịch vụ tư vấn du học nghề tại Đức</h5>
              <p className="service-intro">
                Chương trình du học nghề uy tín, giúp bạn xây dựng sự nghiệp ổn
                định tại Đức với chi phí cực tối ưu.
              </p>
              <p>
                - Tư vấn du học nghề tại Đức theo đúng ngành nghề tiềm năng.{" "}
              </p>
              <p>Đào tạo tiếng Đức bài bản, đạt chuẩn đầu vào.</p>
              <p>Hỗ trợ toàn diện từ chuẩn bị hồ sơ đến khi sống tại Đức.</p>
            </div>
          </div>
          <p className="bounce ">↓</p>
        </Section>

        <Section opacity={opacity5} sectionName="purpose">
          <div className="purpose-container">
            <div className="book">
              <input type="checkbox" name="page1" id="page1" />
              <input type="checkbox" name="page2" id="page2" />
              <input type="checkbox" name="page3" id="page3" />
              <input type="checkbox" name="page4" id="page4" />
              <input type="checkbox" name="page5" id="page5" />
              <div className="pages">
                <div className="page1">
                  <label for="page1"></label>
                  <div className="page1-text">
                    <h3>Connect</h3>
                    <h3>the</h3>
                    <h2>"Đốt"</h2>
                  </div>
                  <span class="material-symbols-outlined">left_click</span>
                </div>
                <div className="page2">
                  <label for="page2"></label>
                  <div className="page2-text">
                    <p>
                      Tại 2G Education, chúng tôi không ngừng nỗ lực để thúc đẩy
                      những hành trình học hỏi của các bạn trẻ Việt.
                    </p>
                    <p>Hành trình tuy khó khăn, nhưng sẽ tràn đầy hứng khởi</p>
                    <p>
                      Khi bạn luôn được trang bị sẵn sàng để tiến vào mọi “cuộc
                      chơi”
                    </p>
                  </div>
                  <span class="material-symbols-outlined">left_click</span>
                </div>
                <div className="page3">
                  <label for="page3"></label>
                  <div className="page3-text">
                    <p>Đủ tư duy</p>
                    <p>Giỏi kĩ năng</p>
                    <p>Vững ngôn ngữ</p>
                    <p>Như tre không kén chọn đất trồng</p>
                    <p>Người trẻ không ngại ngần hoàn cảnh.</p>
                    <p>Luôn kiên trì tiến lên phía trước,</p>
                    <p>Uyển chuyển khi cần, vững vàng khi khó</p>
                    <p>Tạo nên một thế hệ “luỹ thành” của đất nước.</p>
                  </div>
                  <span class="material-symbols-outlined">left_click</span>
                </div>
                <div className="page4">
                  <label for="page4"></label>
                  <div className="page4-text">
                    <p>
                      Bằng sự tận tâm trong giáo dục và cam kết đồng hành xuyên
                      suốt
                    </p>
                    <p>
                      2G Education tự hào là đòn bẩy để các bạn trẻ tự tin ra
                      ngoài thế giới, sống và làm việc như một công dân toàn
                      cầu.
                    </p>
                    <p>
                      Bởi dù cho xuất phát điểm và mục đích hướng tới khác nhau
                    </p>
                    <p>
                      2G Education tin rằng mọi hành trình hội nhập đều bắt đầu
                      từ một điểm kết nối (the dots).
                    </p>
                  </div>
                  <span class="material-symbols-outlined">left_click</span>
                </div>
                <div className="page5">
                  <label for="page5"></label>
                  <div className="page5-text">
                    <p>
                      Và chúng tôi sẽ không ngừng tìm kiếm các cơ hội trong và
                      ngoài nước
                    </p>
                    <p>
                      Không ngừng truyền cảm hứng, truyền nghề, truyền lửa cho
                      các thế hệ mới
                    </p>
                    <p>Tạo ra một vòng tròn giá trị nối kết.</p>
                    <div className="ending-tag">
                      <p>2G Education - Hệ thống đào tạo giáo dục toàn diện.</p>
                      <p>2G Education - Connect the “đốt”.</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined">left_click</span>
                </div>
              </div>
            </div>
          </div>
          <p className="bounce mt-6">↓</p>
        </Section>

        <Section opacity={opacity6} sectionName="founder">
          <h1>Founder's Story</h1>
          <div className="founder_card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
              alt=""
            />
            <div className="founder_info">
              <div className="founder_name">
                <h2>Lê Văn Hải</h2>
              </div>
              <div className="founder_history">
                <p>
                  - Là doanh nhân trẻ tuổi nhất trong lĩnh vực giáo dục tại Việt
                  Nam, sở hữu song tịch thông qua chương trình đầu tư định cư.
                </p>
                <p>
                  - Tốt nghiệp chương trình đào tạo quản lý trường Anh ngữ tại
                  Mỹ do Hiệp hội TESOL cấp bằng.
                </p>
                <p>
                  - Tốt nghiệp chương trình Khởi nghiệp Lean Startup tại Hà Lan.
                </p>
                <p>
                  - Đại diện Việt Nam tham dự hội nghị toàn cầu “World Young
                  Congress” tại Mỹ.
                </p>
                <p>
                  - Là người sáng lập các chương trình trại hè quốc tế tại
                  Singapore, New Zealand và Australia.
                </p>
                <p>
                  - Đã từng tham gia các chương trình Famtrip, gặp gỡ và hợp tác
                  với các trường cũng như đối tác giáo dục tại Mỹ, Châu Âu, Úc,
                  New Zealand, Singapore và Philippines.
                </p>
                <p>
                  - Có hơn 10 năm kinh nghiệm làm việc trong lĩnh vực giáo dục,
                  trong đó hơn 8 năm giữ vai trò Chairman & CEO.
                </p>
                <p>
                  - Cố vấn chuyên môn các cuộc thi: Phó BTC cuộc thi English
                  Challenge do Đài truyền hình NTV và Sở Giáo Dục Nghệ An tổ
                  chức; Trưởng BTC cuộc thi hùng biện tiếng Anh Let Your Voice
                  Be Heard.
                </p>
                <p>
                  - Cử nhân Luật, đạt IELTS 7.5, sở hữu chứng chỉ giảng dạy quốc
                  tế TESOL (Úc).
                </p>
                <p>
                  Cựu HS Chuyên Anh, trường THPT Chuyên Phan Bội Châu, tỉnh Nghệ
                  An.
                </p>
              </div>
              <div
                className="founder_button"
                onClick={() => navigate("/founder_story")}
              >
                <img src="../../assets/images/bamboo_frame.png" alt="" />
                <p>Thư ngỏ</p>
              </div>
            </div>
          </div>

          <p className="bounce">↓</p>
        </Section>

        <Section opacity={opacity7} sectionName="story">
          <h1>2G Story</h1>
          <h6 className="story-headline">Văn hoá 2G – The 3R Framework: </h6>
          <div className="story-card-container">
            <div className="story-card">
              <div className="story-card-content">
                <div className="message">Resilience</div>
                <div className="hidden-message">
                  <p>Resilience: Sức mạnh của sự bền bỉ và nội lực</p> Tập trung
                  xây dựng nền tảng vững chắc trong đào tạo và vận hành. Luôn
                  đặt chất lượng trên lợi ích ngắn hạn. Kiên trì theo đuổi giá
                  trị cốt lõi, tin vào nội lực bên trong của mỗi người.
                </div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-card-content">
                <div className="message">Reimagine</div>
                <div className="hidden-message">
                  <p>
                    Reimagine: Sáng tạo và linh hoạt, dám thay đổi để bứt phá
                  </p>
                  Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo
                  và mô hình kinh doanh. Luôn cập nhật xu hướng giáo dục toàn
                  cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập. Khuyến
                  khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía cạnh
                  từ giảng dạy đến quản trị.
                </div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-card-content">
                <div className="message">Responsibility</div>
                <div className="hidden-message">
                  <p>Responsibility: Trách nhiệm và sự gắn kết bền chặt</p> Cam
                  kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự. Xây
                  dựng môi trường làm việc đề cao sự gắn kết và phát triển cá
                  nhân. Tạo ra tác động tích cực, không chỉ trong giáo dục mà
                  còn trong cộng đồng.
                </div>
              </div>
            </div>
          </div>

          <h6 className="story-headline">
            {" "}
            Development Strategies – Connection & Technology:
          </h6>
          <div className="story-card-container">
            <div className="story-card">
              <div className="story-card-content">
                <div className="message">
                  Connection (Network-based Growth Mindset)
                </div>
                <div className="hidden-message">
                  2G Group tin rằng sức mạnh của sự kết nối chính là chìa khóa
                  để mở rộng tầm ảnh hưởng và tạo ra những giá trị bền vững.
                  Chúng tôi không chỉ xây dựng một hệ sinh thái giáo dục, mà còn
                  kiến tạo một mạng lưới những con người cùng chung khát vọng
                  học tập, phát triển và cống hiến.
                </div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-card-content">
                <div className="message">Technology</div>
                <div className="hidden-message">
                  Ở 2G Group, chúng tôi tận dụng công nghệ để rút ngắn khoảng
                  cách tri thức, kết nối con người và lan toả giá trị bằng cách
                  số hoá trải nghiệm học tập, xây dựng không gian kết nối linh
                  hoạt, và mở rộng quy mô để tạo ra nhiều cơ hội tiếp cận giáo
                  dục và phát triển bản thân cho tất cả mọi người.
                </div>
              </div>
            </div>
          </div>
          <p className="bounce mt-6">↓</p>
        </Section>

        <Section opacity={opacity8} sectionName="human">
          <h1>2G Humans</h1>
          <div className="human-card-container">
            <div className="human-card">
              <div className="human-card-avatar">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                  alt="Third event"
                />
              </div>
              <div className="human-card-info">
                <h2>Alex Nguyen</h2>
                <p>
                  <strong>Age:</strong> 28
                </p>
                <p>
                  <strong>Occupation:</strong> Software Developer
                </p>
                <p>
                  <strong>Location:</strong> Ho Chi Minh City, Vietnam
                </p>
                <p>
                  <strong>Hobbies:</strong> Coding, hiking, playing the guitar,
                  and photography
                </p>
                <p>
                  <strong>Skills:</strong> Python, Django, React, SQL, Docker
                </p>
                <p className="quote">
                  "Code is like humor. When you have to explain it, it’s bad."
                </p>
              </div>
            </div>
            <div className="human-card">
              <div className="human-card-avatar">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                  alt="Third event"
                />
              </div>
              <div className="human-card-info">
                <h2>Alex Nguyen</h2>
                <p>
                  <strong>Age:</strong> 28
                </p>
                <p>
                  <strong>Occupation:</strong> Software Developer
                </p>
                <p>
                  <strong>Location:</strong> Ho Chi Minh City, Vietnam
                </p>
                <p>
                  <strong>Hobbies:</strong> Coding, hiking, playing the guitar,
                  and photography
                </p>
                <p>
                  <strong>Skills:</strong> Python, Django, React, SQL, Docker
                </p>
                <p className="quote">
                  "Code is like humor. When you have to explain it, it’s bad."
                </p>
              </div>
            </div>
            <div className="human-card">
              <div className="human-card-avatar">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                  alt="Third event"
                />
              </div>
              <div className="human-card-info">
                <h2>Alex Nguyen</h2>
                <p>
                  <strong>Age:</strong> 28
                </p>
                <p>
                  <strong>Occupation:</strong> Software Developer
                </p>
                <p>
                  <strong>Location:</strong> Ho Chi Minh City, Vietnam
                </p>
                <p>
                  <strong>Hobbies:</strong> Coding, hiking, playing the guitar,
                  and photography
                </p>
                <p>
                  <strong>Skills:</strong> Python, Django, React, SQL, Docker
                </p>
                <p className="quote">
                  "Code is like humor. When you have to explain it, it’s bad."
                </p>
              </div>
            </div>
            <div className="human-card">
              <div className="human-card-avatar">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                  alt="Third event"
                />
              </div>
              <div className="human-card-info">
                <h2>Alex Nguyen</h2>
                <p>
                  <strong>Age:</strong> 28
                </p>
                <p>
                  <strong>Occupation:</strong> Software Developer
                </p>
                <p>
                  <strong>Location:</strong> Ho Chi Minh City, Vietnam
                </p>
                <p>
                  <strong>Hobbies:</strong> Coding, hiking, playing the guitar,
                  and photography
                </p>
                <p>
                  <strong>Skills:</strong> Python, Django, React, SQL, Docker
                </p>
                <p className="quote">
                  "Code is like humor. When you have to explain it, it’s bad."
                </p>
              </div>
            </div>
            <div className="human-card">
              <div className="human-card-avatar">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                  alt="Third event"
                />
              </div>
              <div className="human-card-info">
                <h2>Alex Nguyen</h2>
                <p>
                  <strong>Age:</strong> 28
                </p>
                <p>
                  <strong>Occupation:</strong> Software Developer
                </p>
                <p>
                  <strong>Location:</strong> Ho Chi Minh City, Vietnam
                </p>
                <p>
                  <strong>Hobbies:</strong> Coding, hiking, playing the guitar,
                  and photography
                </p>
                <p>
                  <strong>Skills:</strong> Python, Django, React, SQL, Docker
                </p>
                <p className="quote">
                  "Code is like humor. When you have to explain it, it’s bad."
                </p>
              </div>
            </div>
            <div className="human-card">
              <div className="human-card-avatar">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                  alt="Third event"
                />
              </div>
              <div className="human-card-info">
                <h2>Alex Nguyen</h2>
                <p>
                  <strong>Age:</strong> 28
                </p>
                <p>
                  <strong>Occupation:</strong> Software Developer
                </p>
                <p>
                  <strong>Location:</strong> Ho Chi Minh City, Vietnam
                </p>
                <p>
                  <strong>Hobbies:</strong> Coding, hiking, playing the guitar,
                  and photography
                </p>
                <p>
                  <strong>Skills:</strong> Python, Django, React, SQL, Docker
                </p>
                <p className="quote">
                  "Code is like humor. When you have to explain it, it’s bad."
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section opacity={opacity9} sectionName="blank"></Section>
      </div>
    </Scroll>
  );
};
