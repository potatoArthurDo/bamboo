import { Scroll, useScroll } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
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
    <Scroll html classNames="scroll-html-wrapper">
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
          <div class="purpose-content">
            <div class="left-text">
              <p>
                <strong>Ngôn ngữ. Tư duy. Kinh nghiệm.</strong>
              </p>
              <p>Những nơi ta đến.</p>
              <p>Những người ta gặp.</p>
              <p>Những phiên bản ta muốn trở thành.</p>
              <p>
                Đó là những mảnh ghép <strong>"the dots"</strong> trên hành
                trình học hỏi và trưởng thành.
              </p>
              <p>
                Một hành trình dài—không ngừng cắm rễ, không ngừng vươn cao.
              </p>
              <p>
                <strong>
                  Nhưng, đã bao giờ bạn dừng lại và tự hỏi ý nghĩa của hành
                  trình này?
                </strong>
              </p>
              <p>Để kết nối.</p>
              <p>Kết nối với chính mình.</p>
              <p>Kết nối với người khác.</p>
              <p>Kết nối với thế giới.</p>
            </div>

            <div class="right-text">
              <p>Connect</p>
              <p>the</p>
              <strong>"Đốt"</strong>
            </div>
          </div>
          <p className="bounce mt-6">↓</p>
        </Section>

        <Section opacity={opacity6} sectionName="founder">
          <h1>Founder's Story</h1>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/r_igfKnvaks?si=uQL80wOBFS0EE9Ij"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p className="bounce">↓</p>
        </Section>

        <Section opacity={opacity7} sectionName="story">
          <h1>2G Story</h1>
          <h6>Văn hoá 2G – The 3R Framework: </h6>
          <h6>
            {/* <strong>Resilience</strong> <strong>Reimagine</strong>{" "}
            <strong>Responsibility</strong> */}
            <div className="story-card-container">
              <div className="story-card">
                <div className="story-card-content">
                  <div className="message">Resilience</div>
                  <div className="hidden-message">
                    <p>Resilience: Sức mạnh của sự bền bỉ và nội lực</p> Tập
                    trung xây dựng nền tảng vững chắc trong đào tạo và vận hành.
                    Luôn đặt chất lượng trên lợi ích ngắn hạn. Kiên trì theo
                    đuổi giá trị cốt lõi, tin vào nội lực bên trong của mỗi
                    người.
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
                    cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập.
                    Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi
                    khía cạnh từ giảng dạy đến quản trị.
                  </div>
                </div>
              </div>

              <div className="story-card">
                <div className="story-card-content">
                  <div className="message">Responsibility</div>
                  <div className="hidden-message">
                    <p>Responsibility: Trách nhiệm và sự gắn kết bền chặt</p>{" "}
                    Cam kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự.
                    Xây dựng môi trường làm việc đề cao sự gắn kết và phát triển
                    cá nhân. Tạo ra tác động tích cực, không chỉ trong giáo dục
                    mà còn trong cộng đồng.
                  </div>
                </div>
              </div>
            </div>
          </h6>
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
                <p class="quote">
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
                <p class="quote">
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
                <p class="quote">
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
                <p class="quote">
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
                <p class="quote">
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
                <p class="quote">
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
