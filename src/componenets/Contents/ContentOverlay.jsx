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
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                alt="Formation of the colonies"
              />
              <div className="content">
                <h3>1200s</h3>
                <p>Formation of the colonies</p>
              </div>
            </div>

            <div className="timeline-item">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                alt="Another event"
              />
              <div className="content">
                <h3>1300s</h3>
                <p>Expansion of settlements</p>
              </div>
            </div>

            <div className="timeline-item">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                alt="Third event"
              />
              <div className="content">
                <h3>1400s</h3>
                <p>Rise of civilizations</p>
              </div>
            </div>

            <div className="timeline-item">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64"
                alt="Fourth event"
              />
              <div className="content">
                <h3>1500s</h3>
                <p>Industrial advancements</p>
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
                src="https://res.cloudinary.com/easyplant/image/fetch/f_auto,q_auto:good,c_fill,w_1140,h_1278/https://cdn.shopify.com/s/files/1/0513/8032/2473/products/MoneyTreeLarge_Iron_Gray_4b3a9b12-f226-45d6-9b02-1afcad5a0bc5.jpg?v=1709577914"
                alt=""
              />
              <h4>Improved Plant Health Monitoring</h4>
              <p>
                Hydration levels, soil nutrients, and plant health tracking,
                ensuring optimal care.
              </p>
            </div>

            <div className="product-card">
              <img
                src="https://res.cloudinary.com/easyplant/image/fetch/f_auto,q_auto:good,c_fill,w_1140,h_1278/https://cdn.shopify.com/s/files/1/0513/8032/2473/products/MoneyTreeLarge_Iron_Gray_4b3a9b12-f226-45d6-9b02-1afcad5a0bc5.jpg?v=1709577914"
                alt=""
              />
              <h4>Improved Plant Health Monitoring</h4>
              <p>
                Hydration levels, soil nutrients, and plant health tracking,
                ensuring optimal care.
              </p>
            </div>

            <div className="product-card">
              <img
                src="https://res.cloudinary.com/easyplant/image/fetch/f_auto,q_auto:good,c_fill,w_1140,h_1278/https://cdn.shopify.com/s/files/1/0513/8032/2473/products/MoneyTreeLarge_Iron_Gray_4b3a9b12-f226-45d6-9b02-1afcad5a0bc5.jpg?v=1709577914"
                alt=""
              />
              <h4>Improved Plant Health Monitoring</h4>
              <p>
                Hydration levels, soil nutrients, and plant health tracking,
                ensuring optimal care.
              </p>
            </div>

            <div className="product-card">
              <img
                src="https://res.cloudinary.com/easyplant/image/fetch/f_auto,q_auto:good,c_fill,w_1140,h_1278/https://cdn.shopify.com/s/files/1/0513/8032/2473/products/MoneyTreeLarge_Iron_Gray_4b3a9b12-f226-45d6-9b02-1afcad5a0bc5.jpg?v=1709577914"
                alt=""
              />
              <h4>Improved Plant Health Monitoring</h4>
              <p>
                Hydration levels, soil nutrients, and plant health tracking,
                ensuring optimal care.
              </p>
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
            </div><div className="human-card">
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
            </div><div className="human-card">
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
