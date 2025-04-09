import { Scroll, useScroll } from "@react-three/drei";
import { useState, useEffect, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./overlay.css";
import ChatBubble from "../ChatBubbles/ChatBubble";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import { color } from "three/tsl";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";
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

  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("tab2");

  const handleMouseEnter = (tabId) => {
    setHoveredCard(tabId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [activeBubble, setActiveBubble] = useState("bubble1");

  const handleBubbleHover = (bubbleId) => {
    setActiveBubble(bubbleId);
  };

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
    setOpacitySection1(1 - scroll.range(0, 1 / 6)); // ~17% for fade out
    setOpacitySection2(scroll.curve(1 / 9, 2 / 9)); // fade in slower
    setOpacitySection3(scroll.curve(2 / 9, 2 / 9));
    setOpacitySection4(scroll.curve(3 / 9, 2 / 9));
    setOpacitySection5(scroll.curve(4 / 9, 2 / 9));
    setOpacitySection6(scroll.curve(5 / 9, 2 / 9));
    setOpacitySection7(scroll.curve(6 / 9, 2 / 9));
    setOpacitySection8(scroll.curve(7 / 9, 2 / 9));
    setOpacitySection9(scroll.range(8 / 9, 1 / 9)); // fade in slower
  });
  const bubbleData = [
    {
      id: "bubble1",
      content:
        "Với vai trò là người tham mưu cho lãnh đạo sở GD&ĐT Nghệ An quản lí các trung tâm ngoại ngữ và cũng là phụ huynh đầu tiên của 2G, tôi hoàn toàn tin tưởng vào chất lượng đào tạo cũng như sự tiên phong của 2G trong ứng dụng công nghệ vào giáo dục. Tôi luôn ủng hộ những gì 2G đang làm cho thế hệ trẻ. Chúc 2G tiếp tục phát triển, tiên phong đổi mới để thật nhiều học sinh vươn xa!",
        sender: "Thầy Nguyễn Mạnh Hà, Trưởng phòng GDCN-GDTX Sở Giáo dục và Đào tạo Nghệ An"
    },
    { id: "bubble2", content: "Thật vui khi được là đối tác đồng hành cùng các bạn trong 3 năm qua. Một đoàn đội trẻ, năng động, chuyên nghiệp, sáng tạo và đầy bản lĩnh, dám đi, dám đến và dám khám phá, đột phá vào những vùng đất, những vùng trời mới",sender: "Mrs.Huyền Phó Giám đốc Đài phát thanh truyền hình Nghệ An NTV" },
    { id: "bubble3", content: "Sự cống hiến của các bạn trong việc đổi mới phương pháp giảng dạy tiếng Anh thực sự truyền cảm hứng. Chúng tôi đặc biệt trân trọng cách 2G Education tích hợp công nghệ vào trải nghiệm học tập, đặc biệt thông qua Cambridge One khi giảng dạy Kid's Box và Think. Cam kết của các bạn trong việc mang đến nền giáo dục  chất lượng cao, hấp dẫn không chỉ giúp học viên học tiếng Anh hiệu quả mà còn khiến hành trình học tập trở nên thú vị hơn.",sender: "Mrs Lê Thị Lệ Huyền, Country Head, Cambridge University Press & Assessment" },
    { id: "bubble4", content: "Hội đồng Anh Việt Nam xin gửi lời chúc mừng nồng nhiệt nhất đến 2G Education – một trong những đối tác Vàng của chúng tôi tại Vinh. Trong suốt 7 năm qua, chúng tôi rất trân trọng sự hợp tác chặt chẽ giữa hai bên trong việc hỗ trợ thí sinh thi IELTS. Chúng tôi đánh giá cao những nỗ lực và đóng góp của 2G Education trong việc mang lại cơ hội giáo dục và phát triển cho học viên.",sender: "Samantha Smith – Giám đốc Khảo thí Quốc gia" },
    { id: "bubble5", content: "Thật vui khi thấy nhiều thế hệ cựu học sinh chuyên Phan quy tụ tại 2G – có thể nói đây là doanh nghiệp tại Vinh có số lượng cựu học sinh chuyên Phan đông nhất, từ em Hải (khóa 42) – nhà sáng lập 2G, đến các bạn nhân sự, và cả các em học sinh đang theo học.",sender: "Cô Lan Thanh - Hiệu trưởng trường THPT Chuyên Phan Bội Châu" },
  ];

  const timelineData = [
    { year: "2018", description: "Tiên Phong Tổ Chức Trại Hè Quốc Tế" },
    { year: "2018", description: "Đối Tác Chiến Lược Với AIT TESOL Úc" },
    {
      year: "2019",
      description:
        "Đơn Vị Tổ Chức Cuộc Thi Hùng Biện Lớn Nhất Nghệ An & Hà Tĩnh",
    },
    {
      year: "2020",
      description: "Ứng Dụng Công Nghệ & Hợp Tác Quốc Tế Trong Giảng Dạy",
    },
    {
      year: "2021",
      description: "Đồng Hành Cùng Chuyên Gia Quốc Tế – Peter Wright",
    },
    {
      year: "2022",
      description:
        "Đối Tác Cùng Đài Truyền Hình & Sở Giáo Dục Nghệ An Tổ Chức Cuộc Thi “English Challenge”",
    },
    {
      year: "2023",
      description:
        "World Scholar’s Cup. 100% Đội Tuyển Vượt Qua Vòng Khu Vực Tại Bangkok, Thái Lan",
    },
    { year: "2024", description: "Đạt Chuẩn Trung Tâm Du Học Quốc Tế ICEF" },
    {
      year: "2023 – 2024",
      description: "Dẫn Đầu Trong Luyện Thi IELTS – Kỷ Lục Học Sinh Đạt 6.5+",
    },
    {
      year: "2025",
      description:
        "Điểm thi IELTS, APTIS chính thức của Hội Đồng Anh do Bộ Giáo Dục Việt Nam cấp phép hoạt động tại Vincom Plaza - Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    },
  ];

  const products = [
    {
      title: "2G Education",
      subtitle: "Học ngoại ngữ, mở tương lai",
      image: "/assets/images/education.jpg",
      intro:
        "Giúp bạn chinh phục ngoại ngữ với chương trình đào tạo bài bản, mở ra cơ hội học tập và sự nghiệp toàn cầu.",
      details: [
        "- Đào tạo đa ngôn ngữ: Tiếng Anh, Tiếng Trung, Tiếng Đức.",
        "- Luyện thi IELTS, THPT Chuyên với lộ trình cá nhân hoá.",
        "- Tiếng Anh giao tiếp & tiếng Anh trẻ em theo phương pháp tư duy phản xạ.",
      ],
    },
    {
      title: "2G Pathways",
      subtitle:
        "Giải pháp du học toàn diện - Du học Anh, Mỹ, Úc, Canada, New Zealand",
      image: "/assets/images/abroad.jpg",
      intro:
        "Một lộ trình du học toàn diện, giúp các em THỰC SỰ SẴN SÀNG về tư duy, kĩ năng, ngôn ngữ khi bước ra thế giới.",
      details: [
        "- Đào tạo tiếng Anh toàn diện (IELTS, SAT, giao tiếp, trẻ em)",
        "- Trại hè quốc tế Eureka Camp tại Singapore, Úc, New Zealand, Mỹ, Canada làm bước đệm cho hành trình du học",
        "-Xây dựng lộ trình cá nhân hoá, hỗ trợ toàn bộ các thủ tục giấy tờ và định hướng ngành học, hướng nghiệp",
      ],
    },
    {
      title: "2G Eureka Camps",
      subtitle: "Cung cấp các giải pháp về mô hình trại hè",
      image: "/assets/images/camp.png",
      intro: "TThấu hiểu bản thân từ những bước chân trải nghiệm.",
      details: [
        "- Trại hè trao đổi tại Úc, New Zealand, Singapore dành cho trẻ 5-12 tuổi.",
        "- Chương trình kết hợp học tập, kỹ năng mềm & tư duy sáng tạo và phản biện.",
        "- Môi trường quốc tế giúp trẻ tự tin và phát triển toàn diện.",
      ],
    },
    {
      title: "GV Manpower",
      subtitle: "Cung cấp dịch vụ tư vấn du học nghề tại Đức",
      image: "/assets/images/german.jpg",
      intro:
        "Chương trình du học nghề uy tín, giúp bạn xây dựng sự nghiệp ổn định tại Đức với chi phí cực tối ưu.",
      details: [
        "- Đào tạo tiếng Đức bài bản, chuẩn đầu ra A1 - B2",
        "- Kết nối doanh nghiệp, đảm bảo cơ hội việc làm tại Đức.",
        "- Tối ưu chi phí, lộ trình hợp pháp, an toàn.",
      ],
    },
    {
      title: "Du học Hồng Khôi",
      subtitle: "Cung cấp dịch vụ tư vấn du học nghề tại Đài Loan",
      image: "/assets/images/taiwan.jpg",
      intro: "Hành trình du học vươn lên dẫn đầu, đạt thành công rực rỡ",
      details: [
        "- Luyện thi TOCFL, đạt chuẩn đầu vào.",
        "- Tư vấn du học tại Đài Loan với các ngành dẫn đầu: Bán dẫn, AI, Điều dưỡng…",
        "- Đa dạng các gói tư vấn: Hệ Cử nhân tự túc, Hệ 1+4, Hệ Vừa học vừa làm, Hệ Ngôn ngữ, Hệ Thạc sĩ, Hệ Tiến sĩ",
        "- Hỗ trợ học bổng: Học bổng Chính phủ, Học bổng Trường, Học bổng TAIWAN ICDF",
      ],
    },
  ];

  const tabs = [
    {
      id: "tab1",
      label: "Văn hoá 2G – The 3R Framework",
      cards: [
        {
          id: "card1",
          title: "Resilience",
          description: "Resilience: Sức mạnh của sự bền bỉ và nội lực",
          details: [
            "Tập trung xây dựng nền tảng vững chắc trong đào tạo và vận hành.",
            "Luôn đặt chất lượng trên lợi ích ngắn hạn.",
            "Kiên trì theo đuổi giá trị cốt lõi, tin vào nội lực bên trong của mỗi người.",
          ],
        },
        {
          id: "card2",
          title: "Reimagine",
          description:
            "Reimagine: Sáng tạo và linh hoạt, dám thay đổi để bứt phá",
          details: [
            "Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo và mô hình kinh doanh.",
            "Luôn cập nhật xu hướng giáo dục toàn cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập.",
            "Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía cạnh từ giảng dạy đến quản trị.",
          ],
        },
        {
          id: "card3",
          title: "Responsibility",
          description: "Responsibility: Trách nhiệm và sự gắn kết bền chặt",
          details: [
            "Cam kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự.",
            "Xây dựng môi trường làm việc đề cao sự gắn kết và phát triển cá nhân.",
            "Tạo ra tác động tích cực, không chỉ trong giáo dục mà còn trong cộng đồng.",
          ],
        },
      ],
    },
    {
      id: "tab2",
      label: "Development Strategies",
      cards: [
        {
          id: "card4",
          title: "Connection",
          description: "Connection (Network-based Growth Mindset)",
          details: [
            "2G Group tin rằng sức mạnh của sự kết nối chính là chìa khóa để mở rộng tầm ảnh hưởng và tạo ra những giá trị bền vững. 2G Group không chỉ nỗ lực xây dựng một hệ sinh thái giáo dục, mà còn kiến tạo một mạng lưới những con người cùng chung khát vọng học tập, phát triển và cống hiến.",
          ],
        },
        {
          id: "card5",
          title: "Technology",
          description: "Technology",
          details: [
            "Ở 2G Group, chúng tôi tận dụng công nghệ để rút ngắn khoảng cách tri thức, kết nối con người và lan toả giá trị bằng cách số hoá trải nghiệm học tập, xây dựng không gian kết nối linh hoạt, và mở rộng quy mô để tạo ra nhiều cơ hội tiếp cận giáo dục và phát triển bản thân cho tất cả mọi người.",
          ],
        },
      ],
    },
  ];

  const human_first_images = [
    "assets/humans-images/wright.jpg",
    "https://i.seadn.io/gae/6McrRtw5AB_JTY4qq2kDvkeSS_JRwrvN8hL0SWwzt0KqUf-6d1ojroL76NhBX0_-eIZEpxeiH9LV_LuEyNSdDL18OHFvW7R1QGU55Q?auto=format&dpr=1&w=1000",
    "https://i.redd.it/have-you-ever-wanted-to-own-an-ugly-ape-jpeg-fomo-no-more-v0-nzdicbgv1bpa1.png?width=512&format=png&auto=webp&s=c410042865ab6476a5b6ab031582d2a0b6af2098",
    "https://nftcalendar.io/storage/uploads/events/2022/3/eqMsubpo7et1OvOYDk1o6NEyM5o2fvY530lXuSrU.gif",
    "https://i.redd.it/have-you-ever-wanted-to-own-an-ugly-ape-jpeg-fomo-no-more-v0-nzdicbgv1bpa1.png?width=512&format=png&auto=webp&s=c410042865ab6476a5b6ab031582d2a0b6af2098",
    "https://i.redd.it/have-you-ever-wanted-to-own-an-ugly-ape-jpeg-fomo-no-more-v0-nzdicbgv1bpa1.png?width=512&format=png&auto=webp&s=c410042865ab6476a5b6ab031582d2a0b6af2098",
    "https://i.seadn.io/gae/6McrRtw5AB_JTY4qq2kDvkeSS_JRwrvN8hL0SWwzt0KqUf-6d1ojroL76NhBX0_-eIZEpxeiH9LV_LuEyNSdDL18OHFvW7R1QGU55Q?auto=format&dpr=1&w=1000",
    "assets/humans-images/human_11.jpg",
    "assets/humans-images/human_12.jpg",
  ];

  const human_second_images = [
    "assets/humans-images/human_1.jpg",
    "assets/humans-images/human_2.jpg",
    "assets/humans-images/human_3.jpg",
    "assets/humans-images/human_4.jpg",
    "assets/humans-images/human_5.jpg",
    "assets/humans-images/human_6.jpg",
    "assets/humans-images/human_7.jpg",
    "assets/humans-images/human_8.jpg",
    "assets/humans-images/human_9.jpg",
    "assets/humans-images/human_10.jpg",
  ];

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

  const founder = {
    name: "Lê Văn Hải",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
    history: [
      "Là doanh nhân trẻ tuổi nhất trong lĩnh vực giáo dục tại Việt Nam, sở hữu song tịch thông qua chương trình đầu tư định cư.",
      "Tốt nghiệp chương trình đào tạo quản lý trường Anh ngữ tại Mỹ do Hiệp hội TESOL cấp bằng.",
      "Tốt nghiệp chương trình Khởi nghiệp Lean Startup tại Hà Lan.",
      "Đại diện Việt Nam tham dự hội nghị toàn cầu “World Young Congress” tại Mỹ.",
      "Là người sáng lập các chương trình trại hè quốc tế tại Singapore, New Zealand và Australia.",
      "Đã từng tham gia các chương trình Famtrip, gặp gỡ và hợp tác với các trường cũng như đối tác giáo dục tại Mỹ, Châu Âu, Úc, New Zealand, Singapore và Philippines.",
      "Có hơn 10 năm kinh nghiệm làm việc trong lĩnh vực giáo dục, trong đó hơn 8 năm giữ vai trò Chairman & CEO.",
      "Cố vấn chuyên môn các cuộc thi: Phó BTC cuộc thi English Challenge do Đài truyền hình NTV và Sở Giáo Dục Nghệ An tổ chức; Trưởng BTC cuộc thi hùng biện tiếng Anh Let Your Voice Be Heard.",
      "Cử nhân Luật, đạt IELTS 7.5, sở hữu chứng chỉ giảng dạy quốc tế TESOL (Úc).",
      "Cựu HS Chuyên Anh, trường THPT Chuyên Phan Bội Châu, tỉnh Nghệ An.",
    ],
    button: {
      text: "Thư ngỏ",
      image: "../../assets/images/bamboo_frame.png",
      link: "/founder_story",
    },
  };

  return (
    <Scroll html className="scroll-html-wrapper">
      <Section opacity={opacity1} sectionName="intro">
        <div className="left-intro">
          <div className="company-mean">
            <h3 className="company_name">2G Group</h3>
            <p className="company_hidden">
              2G Group là một hệ thống giáo dục toàn diện, giúp thế hệ trẻ Việt
              hội nhập toàn cầu thông qua việc đào tạo và du học.
            </p>
          </div>
          <div className="quote-container">
            <p className="journey-quote connect">Connect</p>
            <p className="journey-quote the ">the</p>
            <div className="dot-info">
              <p className="journey-quote dot">"Đốt"</p>
              <p className="journey-quote dot-hidden">
                Với thông điệp Connect the “Đốt”, 2G Group mong muốn mở rộng sự
                kết nối, góp phần phát triển một thế hệ giới trẻ mới, dám học,
                dám làm, dám đi ra thế giới để thay đổi và cống hiến.
              </p>
            </div>
          </div>
        </div>

        <div className="right-intro">
          <h1 className="main_name english1">ANH NGỮ</h1>
          <h1 className="main_name english2">TOÀN DIỆN</h1>
          <h1 className="main_name camping">TRẠI HÈ </h1>
          <h1 className="main_name study">DU HỌC</h1>
          <p className="bounce">↓</p>
        </div>
      </Section>
      <Section opacity={opacity2} sectionName="feedback">
        <h1>Họ đang nói gì </h1>
        <h1> về 2G Education ? </h1>
        {/* <div className="video-container">
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
          </div> */}
        <div className="bubble-feedback-container">
          <div className="bubble-content">
            <p>Touch bubbles to read</p>
            {bubbleData.map((bubble) => (
              <div
                key={bubble.id}
                id={bubble.id}
                className={`bubble-inner ${
                  activeBubble === bubble.id ? "active" : ""
                }`}
              >
                <div className="chat-app">
                  <div className="chat-header">
                    <img
                      src="assets/images/favicon.png"
                      alt="Profile"
                      className="chat-avatar-large"
                    />
                    <p>2G Education</p>
                  </div>
                  <div className="chat-container">
                    <ChatBubble
                      message="Xin chào, Họ đang nói gì về 2G?"
                      isSender={false}
                    />
                    <ChatBubble message={bubble.content} isSender={true} sender={bubble.sender} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="bubbles">
            {bubbleData.map((bubble) => (
              <div
                key={bubble.id}
                className={`bubble ${
                  activeBubble === bubble.id ? "active" : ""
                }`}
                onMouseEnter={() => handleBubbleHover(bubble.id)}
                onMouseLeave={() => handleBubbleHover(bubble.id)}
              >
                {/* {`Bubble ${bubble.id.replace("bubble", "")}`} */}?
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section opacity={opacity3} sectionName="achievement">
        <h1>Thành tựu </h1>
        <h1> 2G Education</h1>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="content">
                <h3>{item.year}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section opacity={opacity4} sectionName="service">
        <h1>Hệ sinh thái </h1>
        <h1> Giáo dục của 2G</h1>
        {/* <div className="product-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>{product.subtitle}</h5>
              <p className="service-intro">{product.intro}</p>
              {product.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          ))}
        </div> */}
        <ProductCarousel products={products} />
      </Section>

      <Section opacity={opacity5} sectionName="purpose">
        <h1>Mục đích của 2G</h1>
        <div className="purpose-container">
          <div className="book">
            {pages.map((page) => (
              <input
                key={page.id}
                type="checkbox"
                name={page.id}
                id={page.id}
              />
            ))}
            <div className="pages">
              {pages.map((page) => (
                <div key={page.id} className={page.id}>
                  <label htmlFor={page.id}></label>
                  <div className={`${page.id}-text`}>
                    {page.frontText && (
                      <div className="front-page">
                        {page.frontText.map((text, index) => (
                          <h3 key={index}>{text}</h3>
                        ))}
                      </div>
                    )}
                    {page.backText && (
                      <div className="back-page">
                        {page.backText.map((text, index) => (
                          <h3 key={index}>{text}</h3>
                        ))}
                      </div>
                    )}
                    {page.text &&
                      page.text.map(
                        (
                          sentence,
                          sentenceIndex // First map for sentences
                        ) => (
                          <p key={sentenceIndex}>
                            {sentence.map(
                              (
                                word,
                                wordIndex // Second map for words
                              ) => (
                                <span
                                  key={wordIndex}
                                  style={{
                                    color: word.highlight
                                      ? word.color
                                      : "inherit",
                                    fontWeight: word.highlight
                                      ? word.weight
                                      : "normal",
                                  }}
                                >
                                  {word.text}
                                </span>
                              )
                            )}
                          </p>
                        )
                      )}
                    {page.endingTag && (
                      <div className="ending-tag">
                        {page.endingTag.map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="material-symbols-outlined">left_click</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Section>

      <Section opacity={opacity6} sectionName="story">
        <h1>Định hướng </h1>
        <h1>phát triển</h1>
        <div className="tab-container">
          {/* <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div> */}

          <div className="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-panel ${activeTab === tab.id ? "active" : ""}`}
              >
                <div className="card-tab-container">
                  <div className="card-tab-buttons">
                    {tab.cards.map((card) => (
                      <div
                        key={card.id}
                        className={`flip-card ${
                          hoveredCard === card.id ? "flipped" : ""
                        }`}
                        onMouseEnter={() => handleMouseEnter(card.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">{card.title}</div>
                          <div className="flip-card-back">
                            <p>{card.description}</p>
                            <ul>
                              {card.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section opacity={opacity7} sectionName="founder">
        <h1>2G Founder Profile</h1>
        <div className="founder_card">
          <img src={founder.image} alt={founder.name} />

          <div className="founder_info">
            <div className="founder_name">
              <h2>{founder.name}</h2>
            </div>

            <div className="founder_history">
              {founder.history.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </div>

            <div
              className="founder_button"
              onClick={() => navigate(founder.button.link)}
            >
              <img src={founder.button.image} alt={founder.button.text} />
              <p>{founder.button.text}</p>
            </div>
          </div>
        </div>

      </Section>

      <Section opacity={opacity8} sectionName="human">
        <h1>2G Humans</h1>
        <div className="human-intro">
          <h5>ĐỘI NGŨ CỐ VẤN CHUYÊN MÔN ĐẦU NGÀNH TRONG NƯỚC & QUỐC TẾ</h5>
          <p>
            2G Education tự hào có sự đồng hành của các chuyên gia hàng đầu
            trong lĩnh vực giáo dục
          </p>
          <h5>ĐỘI NGŨ GIẢNG VIÊN 2G TÂM HUYẾT VÀ CHUYÊN MÔN HÀNG ĐẦU</h5>
          <p>
            2G Education sở hữu đội ngũ giảng viên chuyên môn cao, với tiêu
            chuẩn hạng A++, đạt IELTS 8.0+ / C1+, bao gồm:
          </p>
          <ul>
            <li>
              - Giảng viên Việt Nam tốt nghiệp từ các trường Đại học hàng đầu:
              ĐH Sư Phạm, ĐH Ngoại Ngữ
            </li>
            <li>- Cựu du học sinh, giảng viên giàu kinh nghiệm giảng dạy</li>
            <li>
              - Giáo viên bản ngữ, có chứng chỉ giảng dạy quốc tế, tận tâm và
              chuyên môn cao
            </li>
          </ul>
        </div>
        <div className="human-slider">
          <Slider
            images={human_first_images}
            width="200px"
            height="266.67px"
            quantity={9}
          />
          <Slider
            images={human_second_images}
            width="200px"
            height="266.67px"
            quantity={10}
            reverse={true}
          />
          <p onClick={() => navigate("/instructors")}>Xem chi tiết</p>
        </div>
      </Section>

      <Section opacity={opacity9} sectionName="banner-footer">
        <div className="footer-first-content">
          <div className="left-intro">
            <div className="company-mean">
              <h3 className="company_name">2G Group</h3>
            </div>
            <div className="quote-container">
              <p className="journey-quote connect">Connect</p>
              <p className="journey-quote the ">the</p>
              <div className="dot-info">
                <p className="journey-quote dot">"Đốt"</p>
              </div>
            </div>
          </div>

          <div className="right-intro">
            <h1 className="main_name english1">ANH NGỮ</h1>
            <h1 className="main_name english2">TOÀN DIỆN</h1>
            <h1 className="main_name camping">TRẠI HÈ </h1>
            <h1 className="main_name study">DU HỌC</h1>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <img
                s
                src="assets/images/logo.png"
                alt="Company Logo"
                className="logo"
              />
            </div>
            <div className="footer-info">
              <p>Branches:</p>
              <ul>
                <li>New York, USA</li>
                <li>London, UK</li>
                <li>Tokyo, Japan</li>
              </ul>
              <p>Phone: +1 234 567 890</p>
            </div>
            <div className="footer-links">
              <p>Quick Links:</p>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">Về Chúng Tôi</a>
                </li>
                <li>
                  <a href="/founder_story">Thư ngỏ</a>
                </li>
                <li>
                  <a href="/instructors">2G Humans</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <p>Follow Us:</p>
              <a href="#">
                <img src="/facebook-icon.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="/twitter-icon.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="/instagram-icon.png" alt="Instagram" />
              </a>
            </div>
          </div>
          <p className="footer-bottom">
            &copy; {new Date().getFullYear()} 2G Education. All rights reserved.
          </p>
        </footer>
        {/* <h3 className="company_name">2G Education</h3>
        <h1 className="main_name">GLOCAL</h1>
        <h1 className="main_name">TREE</h1>
        */}
      </Section>
    </Scroll>
  );
};
