import ChatBubble from "../ChatBubbles/ChatBubble";
import Footer from "../Footer/Footer";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./mobileOverlay.css";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from 'react-responsive';

const MobileOverlay = () => {
  const [openTab, setOpenTab] = useState(null);
  const carouselRef = useRef(null);

   const isDesktop = useMediaQuery({ minWidth: 768 });

  // Step 1: Initialize the array of refs
  const itemsRef = useRef([]);

  // Register the plugin
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // Step 2: Animate each item in the array of refs
    itemsRef.current.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top bottom", // Start animation when the element hits 80% of the viewport
          toggleActions: "play reverse play reverse",
          //   markers: true,
        },
      });
    });
    ScrollTrigger.refresh();
  }, []);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const itemWidth = container.offsetWidth;

    if (direction === "left") {
      container.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  const toggleTab = (index) => {
    setOpenTab(openTab === index ? null : index);
  };
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
      logo: "assets/images/favicon.png",
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
      logo: "assets/images/favicon.png",
    },
    {
      title: "2G Eureka Camps",
      subtitle: "Cung cấp các giải pháp về mô hình trại hè",
      image: "/assets/images/camp.png",
      intro: "Thấu hiểu bản thân từ những bước chân trải nghiệm.",
      details: [
        "- Trại hè trao đổi tại Úc, New Zealand, Singapore dành cho trẻ 5-12 tuổi.",
        "- Chương trình kết hợp học tập, kỹ năng mềm & tư duy sáng tạo và phản biện.",
        "- Môi trường quốc tế giúp trẻ tự tin và phát triển toàn diện.",
      ],
      logo: "assets/images/eureka_logo.png",
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
      logo: "assets/images/manpower_logo.png",
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
      logo: "assets/images/hongkhoi_logo.png",
    },
  ];

  const threeR = [
    {
      title: "Resilience",
      title_intro: "Sức mạnh của sự bền bỉ và nội lực",
      content: [
        "Tập trung xây dựng nền tảng vững chắc trong đào tạo và vận hành.",
        "Luôn đặt chất lượng trên lợi ích ngắn hạn.",
        "Kiên trì theo đuổi giá trị cốt lõi, tin vào nội lực bên trong của mỗi người.",
      ],
    },
    {
      title: "Reimagine",
      title_intro: "Sáng tạo và linh hoạt, dám thay đổi để bứt phá",
      content: [
        "Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo và mô hình kinh doanh.",
        "Luôn cập nhật xu hướng giáo dục toàn cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập.",
        "Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía cạnh từ giảng dạy đến quản trị.",
      ],
    },
    {
      title: "Responsibility",
      title_intro: "Trách nhiệm và sự gắn kết bền chặt",
      content: [
        "Cam kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự.",
        "Xây dựng môi trường làm việc đề cao sự gắn kết và phát triển cá nhân.",
        "Tạo ra tác động tích cực, không chỉ trong giáo dục mà còn trong cộng đồng.",
      ],
    },
  ];

  const threeC = [
    {
      title: "Care",
      title_intro: "Sống tử tế",
      content:
        "Sự tử tế không chỉ là một phẩm chất cá nhân mà còn là cách 2G vận hành mọi hoạt động. Tử tế trong cách giáo dục – luôn lắng nghe, thấu hiểu và hỗ trợ học viên, phụ huynh. Tử tế trong cách làm việc – tôn trọng, hợp tác chân thành với đồng đội và đối tác. Và tử tế với cộng đồng – lan tỏa những giá trị tốt đẹp, tạo nên môi trường học tập và làm việc đầy cảm hứng, nhân văn.",
    },
    {
      title: "Credibility",
      title_intro: "Sống liêm chính",
      content:
        "Chúng tôi tin rằng thành công bền vững phải dựa trên sự tin tưởng và cam kết lâu dài với học viên, đối tác và cộng đồng. Từ việc chú tâm xây dựng chương trình học, phương pháp đào tạo và giá trị thực sự để đảm bảo học viên nhận được đúng những gì họ cần, đến việc công khai mọi thông tin với đối tác và đội ngũ và luôn ưu tiên giữ vững đạo đức nghề nghiệp, chúng tôi luôn cố gắng hướng tới sự minh bạch và tạo ra môi trường học tập công bằng, hiệu quả.",
    },

    {
      title: "Contribution",
      title_intro: "Sống cống hiến",
      content:
        "Chúng tôi tin rằng giáo dục có sức mạnh thay đổi cuộc sống và tạo ra những tác động tích cực lâu dài. Mỗi bước đi của 2G đều có sự tính toán đến ảnh hưởng đối với cộng đồng, hướng tới việc hỗ trợ học tập cho đa dạng các đối tượng, đặc biệt là các bạn trẻ có hoàn cảnh khó khăn. Vì vậy, 2G Group đã lập ra quỹ giáo dục Glocal Villagers, liên tục tổ chức các hoạt động xã hội hàng năm, và không ngừng xây dựng những chương trình mang lại giá trị thực cho cộng đồng.",
    },
  ];

  const purpose_story = [
    {
      title: "Câu chuyện cây tre",
      content: [
        "- Tre không vội vã. Tre cắm rễ sâu, tích tụ sức mạnh, rồi vươn thẳng lên trời – mạnh mẽ nhưng vô cùng linh hoạt. Đó cũng là lí do 2G Group lấy hình ảnh cây tre làm hình ảnh biểu tượng chủ đạo.",
        "- Founder của 2G Group - anh Lê Văn Hải đã từng chia sẻ, càng trưởng thành, anh càng cảm nhận sâu sắc gốc rễ – gia đình, cộng đồng, và di sản Việt Nam đã định hình anh. Với anh, cây tre không chỉ là một loại cây, mà là biểu tượng của bản sắc.",
        "- Sẽ mất hàng năm để rễ tre đan xen cắm chặt dưới lòng sâu trước khi vươn thẳng lên trời, mạnh mẽ và nhanh chóng. Anh học từ đó: muốn vươn cao, phải xây nền móng vững – trong công việc, trong đời sống. Tre phát triển theo từng cụm và lớn lên theo từng đốt, luôn hướng tới mây xanh. Đó cũng là hình ảnh mà anh muốn mọi người liên tưởng tới khi biết đến 2G Group.",
        "- 2G Group kiên nhẫn xây dựng nền tảng – từ chất lượng đào tạo, chất lượng con người đến sự minh bạch trong vận hành – để tạo nên một hệ thống giáo dục bền vững, nơi mọi cá nhân cùng vươn lên từ gốc rễ mạnh mẽ của chính mình.",
      ],
    },
    {
      title: "Câu chuyện The Dots",
      content: [
        "- Lấy cảm hứng từ câu chuyện của Steve Jobs, người từng kể về những “dấu chấm” trong đời mình: bỏ đại học, học thư pháp, làm việc không mục đích rõ ràng, dường như trong thời điểm đó, mọi thứ Steve Jobs làm đều chưa có ý nghĩa rõ ràng.",
        "- Nhưng khi nhìn lại, anh nhận ra chính những dấu chấm ấy – sự tò mò, những bước đi lệch hướng – đã nối lại để tạo nên những viên gạch vững chắc cho Apple - một thương hiệu đã thay đổi cả thế giới công nghệ.",
        "- Ở 2G Group, chúng tôi sống với tinh thần ấy. Mỗi ý tưởng mới, mỗi ứng dụng công nghệ, mỗi thay đổi trong cách dạy và học, mỗi cá nhân thành công trong việc bước ra thế giới là một dấu chấm nhỏ. Chúng tôi tin vào việc nối những dấu chấm nhỏ đó, biến sự ngẫu nhiên thành sáng tạo, biến câu chuyện cá nhân thành cảm hứng cộng đồng, từ đó tạo ra một mạng lưới những cá nhân xuất sắc, dám sống và dám mơ.",
      ],
    },
    {
      title: "Câu chuyện Connect the 'Đốt'",
      content: [
        "Tre cắm rễ, vươn từng đốt.",
        "Dấu “dots” nhỏ, ý tưởng lớn.",
        "2G Group biến Connect the dots thành Connect the “đốt” với tham vọng phá bỏ rào cản giáo dục toàn cầu, xây dựng một hệ sinh thái giáo dục, gắn thế hệ trẻ với tri thức, vững gốc mà vươn xa.",
      ],
    },
  ];

  const achievements = [
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
        "Đối Tác Cùng Đài Truyền Hình & Sở Giáo Dục Nghệ An Tổ Chức Cuộc Thi 'English Challenge'",
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

  const founder_profile = [
    {
      info: "- Là doanh nhân trẻ tuổi nhất trong lĩnh vực giáo dục tại Việt Nam, sở hữu song tịch thông qua chương trình đầu tư định cư.",
    },
    {
      info: "- Tốt nghiệp chương trình đào tạo quản lý trường Anh ngữ tại Mỹ do Hiệp hội TESOL cấp bằng.",
    },
    { info: "- Tốt nghiệp chương trình Khởi nghiệp Lean Startup tại Hà Lan." },
    {
      info: "- Đại diện Việt Nam tham dự hội nghị toàn cầu “World Young Congress” tại Mỹ.",
    },
    {
      info: "- Là người sáng lập các chương trình trại hè quốc tế tại Singapore, New Zealand và Australia.",
    },
    {
      info: "- Đã từng tham gia các chương trình Famtrip, gặp gỡ và hợp tác với các trường cũng như đối tác giáo dục tại Mỹ, Châu Âu, Úc, New Zealand, Singapore và Philippines.",
    },
    {
      info: "- Có hơn 10 năm kinh nghiệm làm việc trong lĩnh vực giáo dục, trong đó hơn 8 năm giữ vai trò Chairman & CEO.",
    },
    {
      info: "- Cố vấn chuyên môn các cuộc thi: Phó BTC cuộc thi English Challenge do Đài truyền hình NTV và Sở Giáo Dục Nghệ An tổ chức; Trưởng BTC cuộc thi hùng biện tiếng Anh Let Your Voice Be Heard",
    },
    {
      info: "- Cử nhân Luật, đạt IELTS 7.5, sở hữu chứng chỉ giảng dạy quốc tế TESOL (Úc).",
    },
    {
      info: "- Cựu HS Chuyên Anh, trường THPT Chuyên Phan Bội Châu, tỉnh Nghệ An.",
    },
  ];

  const adviser = [
    {
      image: "assets/humans-images/Warren.jpg",
      name: "THẦY WARREN ENG",
      achievements: [
        "- Chuyên gia giáo dục người Singapore",
        "- Cựu Hiệu trưởng UEF HCMC",
        "- Cố vấn chiến lược và phát triển chương trình",
      ],
    },

    {
      image: "assets/humans-images/Duy_Hiep.jpg",
      name: "THẦY DUY HIỆP",
      achievements: [
        "- Giảng viên Đại học tại TP.HCM",
        "- Chuyên gia tư vấn du học & luật sư di trú New Zealand",
        "- Cố vấn các chương trình du học",
      ],
    },
  ];
  const teacher = [
    {
      name: "CHU MINH THÙY",
      image: "assets/humans-images/human_11.jpg",
      intro: "QUẢN LÝ HỌC VỤ",
      achivements: [
        "- Tốt nghiệp cử nhân ngành Kinh tế quốc tế, Học viện Ngoại giao Việt Nam",
        "- Đạt IELTS 8.0 overall, trong đó speaking 8.0 và Reading 9.0",
        "- Sở hữu chứng chỉ quốc tế về kỹ năng và phương pháp giảng dạy tiếng Anh TESOL",
        "- 3 năm kinh nghiệm giảng dạy và quản lý tại các hệ thống trung tâm tiếng Anh lớn",
      ],
    },
    {
      name: "NGUYỄN CÔNG THÀNH",
      image: "assets/humans-images/human_1.jpg",
      intro: "GIÁO VIÊN TRƯỞNG IELTS",
      achivements: [
        "- Tốt nghiệp loại giỏi chuyên ngành quản trị kinh doanh tại trường Wisconsin International University in Ukraine",
        "- IELTS Overall 8.0 ( Listening 8.5, Reading 8.5, Speaking 8.0)",
        "- Hơn 6 năm kinh nghiệm giảng dạy và luyện thi IELTS 4 kỹ năng",
        "- 15 năm sinh sống, học tập và làm việc tại các nước châu Âu, Mỹ, Ukraine, Nga, Đức, Canada",
      ],
    },

    {
      name: "KENZIE DUONG",
      image: "assets/humans-images/Kenzie.jpg",
      intro: "GIÁO VIÊN IELTS/SAT",
      achivements: [
        "- 5 năm kinh nghiệm tư vấn hỗ trợ học sinh xin học bổng các trường ĐH Hoa Kỳ",
        "- 6 năm kinh nghiệm giảng dạy Tiếng Anh ở nhiều trình độ khác nhau, trong đó có nhiều học sinh đạt điểm TOEFL từ 109-115; các học sinh SAT đạt điểm từ 1300+ và 1400+...",
        "- Điểm SAT nằm trong top 1% iểm số cao nhất thế giới",
        "- Điểm IELTS Overall đạt 8.5, không có kỹ năng nào dưới 8.0, có chứng chỉ giảng dạy TESOL quốc tế",
      ],
    },
    {
      name: "EMILY",
      image: "assets/humans-images/Emily.jpg",
      intro: "GIÁO VIÊN IELTS/ APTIS ESOL",
      achivements: [
        "- Đạt IELTS 8.0 overall, trong đó Speaking 8.0",
        "- Chứng chỉ giảng dạy TESOL",
        "- Từng làm việc tại Lãnh sứ quán Mỹ",
        "- 7 năm kinh nghiệm giảng dạy IELTS, tiếng Anh thuyết trình, hùng biện ",
      ],
    },
    {
      name: "THANH LONG",
      image: "assets/humans-images/human_2.jpg",
      intro: "GIÁO VIÊN IELTS/ APTIS ESOL",
      achivements: [
        "- Tốt nghiệp Đại học Giao Thông Vận Tải",
        "- Giáo viên với hơn 6 năm kinh nghiệm giảng dạy ESL/IELTS",
        "- IELTS 8 Overall , không kỹ năng nào dưới 7.0 (Listening 9.0, Reading 8.5, Writing 8.0)",
        "- TOEIC 860/990 ",
      ],
    },
    {
      name: "ALEX BOUVIER",
      image: "assets/humans-images/Alex.jpg",
      intro: "GIÁO VIÊN IELTS",
      achivements: [
        "- Một trong số ít Giảng viên Tiếng Anh đạt trình độ CPE Level C2 (IELTS 8.5) Quốc tế tại Việt Nam",
        "- Hơn 05 năm kinh nghiệm giảng dạy IELTS từ cơ bản đến nâng cao",
        "- Tốt nghiệp chứng chỉ Giảng dạy Quốc tế TESOL",
      ],
    },
    {
      name: "ZSANDRA",
      image: "assets/humans-images/human_9.jpg",
      intro: "GIÁO VIÊN TIẾNG ANH - MẦM NON/ TIỂU HỌC",
      achivements: [
        "- Cử nhân Nghệ thuật truyền thông +hoàn thành tín chỉ cử nhân ngôn ngữ Anh",
        "- Sở hữu chứng chỉ TESOL được cấp bởi International Open Academy",
        "- Chứng chỉ TEYL (Dạy tiếng Anh cho trẻ nhỏ) được cấp bởi Teach International",
        "- Chứng chỉ EF SET trình độ C1",
        "- Hơn 4 năm kinh nghiệm giảng dạy",
      ],
    },
    {
      name: "RYAN",
      image: "assets/humans-images/Ryan.jpg",
      intro: "",
      achivements: [
        "- Tốt nghiệp cử nhân sư phạm trung học cơ sở, chuyên ngành giảng dạy tiếng Anh",
        "- Có 7 năm kinh nghiệm giảng dạy, từng là giảng viên của đại học CEBU và trưởng nhóm học vụ tại học viện Anh ngữ SMEAG Philippines",
        "- Sở hữu chứng chỉ giảng dạy quốc tế TESOL",
      ],
    },
    {
      name: "TUẤN ANH",
      image: "assets/humans-images/human_3.jpg",
      intro: "",
      achivements: [
        "- IELTS 8.5 Listening",
        "- Chứng chỉ giảng dạy quốc tế TESOL",
        "- 7 năm kinh nghiệm giảng dạy tại các trung tâm anh ngữ lớn",
        "- Sở hữu kênh tiktok về Speaking IELTS hơn 12k followers",
      ],
    },
    {
      name: "THANH NHÀN",
      image: "assets/humans-images/Thanh_Nhan.jpg",
      intro: "",
      achivements: [
        "- Đạt học bổng thạc sĩ TESOL tại đại học Northampton, Vương quốc Anh & Học bổng thạc sĩ Education tại đại học Huddersfield và đại học Leeds Beckett, Vương quốc Anh",
        "- Chứng chỉ TESOL (Teaching English to Speakers of Other Languages)",
        "- Học giả học bổng AmCham Scholarship được cấp bởi Phòng Thương mại Hoa Kỳ tại Việt Nam",
        "- 5 năm kinh nghiệm giảng dạy tiếng Anh, luyện thi IELTS",
        "- IELTS 7.5",
      ],
    },

    {
      name: "BẢO HÀ",
      image: "assets/humans-images/Bao_Ha.jpg",
      intro: "",
      achivements: [
        "- Tốt nghiệp loại xuất sắc chuyên ngành sư phạm Anh, trường Đại học Ngoại ngữ Huế.",
        "- Học bổng thạc sĩ TESOL tại Đại học Huddersfield, Anh",
        "- IELTS Overall 8.0 trong đó Listening và Reading 8.5, Speaking 8.0",
        "- 5 năm kinh nghiệm giảng dạy IELTS & tiếng Anh du học, định cư",
      ],
    },
  ];

  const bubbleData = [
    {
      id: "bubble1",
      content:
        "Với vai trò là người tham mưu cho lãnh đạo sở GD&ĐT Nghệ An quản lí các trung tâm ngoại ngữ và cũng là phụ huynh đầu tiên của 2G, tôi hoàn toàn tin tưởng vào chất lượng đào tạo cũng như sự tiên phong của 2G trong ứng dụng công nghệ vào giáo dục. Tôi luôn ủng hộ những gì 2G đang làm cho thế hệ trẻ. Chúc 2G tiếp tục phát triển, tiên phong đổi mới để thật nhiều học sinh vươn xa!",
      sender:
        "Thầy Nguyễn Mạnh Hà, Trưởng phòng GDCN-GDTX Sở Giáo dục và Đào tạo Nghệ An",
    },
    {
      id: "bubble2",
      content:
        "Thật vui khi được là đối tác đồng hành cùng các bạn trong 3 năm qua. Một đoàn đội trẻ, năng động, chuyên nghiệp, sáng tạo và đầy bản lĩnh, dám đi, dám đến và dám khám phá, đột phá vào những vùng đất, những vùng trời mới",
      sender: "Mrs.Huyền Phó Giám đốc Đài phát thanh truyền hình Nghệ An NTV",
    },
    {
      id: "bubble3",
      content:
        "Sự cống hiến của các bạn trong việc đổi mới phương pháp giảng dạy tiếng Anh thực sự truyền cảm hứng. Chúng tôi đặc biệt trân trọng cách 2G Education tích hợp công nghệ vào trải nghiệm học tập, đặc biệt thông qua Cambridge One khi giảng dạy Kid's Box và Think. Cam kết của các bạn trong việc mang đến nền giáo dục  chất lượng cao, hấp dẫn không chỉ giúp học viên học tiếng Anh hiệu quả mà còn khiến hành trình học tập trở nên thú vị hơn.",
      sender:
        "Mrs Lê Thị Lệ Huyền, Country Head, Cambridge University Press & Assessment",
    },
    {
      id: "bubble4",
      content:
        "Hội đồng Anh Việt Nam xin gửi lời chúc mừng nồng nhiệt nhất đến 2G Education – một trong những đối tác Vàng của chúng tôi tại Vinh. Trong suốt 7 năm qua, chúng tôi rất trân trọng sự hợp tác chặt chẽ giữa hai bên trong việc hỗ trợ thí sinh thi IELTS. Chúng tôi đánh giá cao những nỗ lực và đóng góp của 2G Education trong việc mang lại cơ hội giáo dục và phát triển cho học viên.",
      sender: "Samantha Smith – Giám đốc Khảo thí Quốc gia",
    },
    {
      id: "bubble5",
      content:
        "Thật vui khi thấy nhiều thế hệ cựu học sinh chuyên Phan quy tụ tại 2G – có thể nói đây là doanh nghiệp tại Vinh có số lượng cựu học sinh chuyên Phan đông nhất, từ em Hải (khóa 42) – nhà sáng lập 2G, đến các bạn nhân sự, và cả các em học sinh đang theo học.",
      sender: "Cô Lan Thanh - Hiệu trưởng trường THPT Chuyên Phan Bội Châu",
    },

    {
      id: "bubble6",
      content:
        "chúc 2G luôn giữ vững phong độ, mãi đỉnh, mãi tràn đầy năng lượng của tuổi trẻ, của tinh thần dám nghĩ, dám làm. Chúc đội ngũ 2G luôn cháy hết mình với sứ mệnh lan tỏa tri thức, mang đến những giá trị tuyệt vời cho các em học sinh và phụ huynh.",
      sender: "Mrs Dung - Trường Đại học Anh Quốc Việt Nam BUV",
    },
    {
      id: "bubble7",
      content:
        "Từ khi 2G Hà Tĩnh đi vào hoạt động cách đây 3 năm, tôi đã dõi theo và đánh giá cao những đóng góp của 2G trong việc kết nối các cuộc thi quốc tế như World Scholar’s Cup, cũng như tạo ra những sân chơi học thuật ý nghĩa như hùng biện Let Your Voice Be Heard, Biên tập viên nhí. Những chương trình này đã giúp học sinh trường THCS Lê Văn Thiêm có cơ hội tranh tài, thể hiện bản lĩnh và đạt nhiều giải thưởng.",
      sender: "Cô Huyền - Phó hiệu trưởng trường THCS Lê Văn Thiêm",
    },
    {
      id: "bubble8",
      content:
        "Những ấn tượng của tôi đối với 2G trên chặng đường đồng hành 7 năm qua thể hiện ở 1 thông điệp đó là: '2G - The Garden for Genius Germination' Chúc cho 2G tiếp tục vững vàng trên những hành trình cùng các em vươn cao, vươn xa, chinh phục những đỉnh cao mới.",
      sender: "Mrs Ngọc - Đại diện Vietnam Airlines",
    },
  ];

  return (
    <>
      <section className="mobile_section">
        <div className="mobile_intro">
          <div className="mobile_main_name">
            <h3 className="mobile_company_name">2G Group</h3>
            <h1 className="mobile_connect">Connect</h1>
            <h1 className="mobile_the">the</h1>
            <h1 className="mobile_dots">"Đốt"</h1>
          </div>
        </div>

        <div className="mobile-intro-second-group">
          <div
            className="mobile_english"
            ref={(el) => (itemsRef.current[0] = el)}
          >
            NGÔN NGỮ
          </div>
          {/* <div className="mobile_english-second" ref={(el) => (itemsRef.current[1] = el)}>TOÀN DIỆN</div> */}
          <div
            className="mobile_camping"
            ref={(el) => (itemsRef.current[2] = el)}
          >
            TRẠI HÈ
          </div>
          <div
            className="mobile_aboard"
            ref={(el) => (itemsRef.current[3] = el)}
          >
            DU HỌC{" "}
          </div>
        </div>

        <div className="explaination">
          <div
            className="company-explain"
            ref={(el) => (itemsRef.current[4] = el)}
          >
            <p>
              {" "}
              2G Group là một hệ thống <b>giáo dục toàn diện</b>, giúp thế hệ
              trẻ Việt hội nhập <b>toàn cầu</b> thông qua việc <b>đào tạo</b> và{" "}
              <b>du học</b>.
            </p>
          </div>
          <div
            className="theme-explain"
            ref={(el) => (itemsRef.current[5] = el)}
          >
            <p>
              Với thông điệp Connect the “Đốt”, 2G Group mong muốn mở rộng sự
              kết nối, góp phần phát triển một thế hệ giới trẻ mới, dám học, dám
              làm, dám đi ra thế giới để thay đổi và cống hiến.
            </p>
          </div>
        </div>
      </section>
      <section className="mobile_section">
        <div className="mobile_feedback">
          <h1>Họ đang nói gì về 2G ? </h1>
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
                message="Xin chào, họ đang nói gì về 2G ?"
                isSender={false}
                sender={"2G Education"}
              />
              <div className="mobile-carousel-wrapper">
                <button
                  className="mobile-nav-btn mobile-left"
                  onClick={() => scroll("left")}
                >
                  ‹
                </button>
                <div className="mobile-carousel" ref={carouselRef}>
                  {bubbleData.map((item) => (
                    <div
                      className="mobile-carousel-item"
                      key={item}
                      style={{ background: "none", padding: "0" }}
                    >
                      <ChatBubble
                        message={item.content}
                        isSender={true}
                        sender={item.sender}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="mobile-nav-btn mobile-right"
                  onClick={() => scroll("right")}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile_achievement">
          <h1>Thành tựu</h1>
          <h1>2G Education</h1>
          <div className="mobile_timeline">
            {achievements.map((item, index) => (
              <div key={index} className="mobile_timeline-item">
                <div className="mobile_content">
                  <h3>{item.year}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile-services">
          <h1>Hệ sinh thái giáo dục của 2G</h1>
          <div className="product-carousel">
            <div className="product-carousel-inner">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  <img
                    src={product.logo}
                    alt="product logo"
                    style={{
                      width: "auto",
                        height: isDesktop ? "200px" : "120px",
                      background: "rgba(160, 181, 56, 0.662)",
                      marginBottom: "50px",
                    }}
                  />
                  <img src={product.image} alt={product.title} />
                  <h4>{product.title}</h4>
                  <h5>{product.subtitle}</h5>
                  <p className="service-intro">{product.intro}</p>
                  {product.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile-purpose">
          <h1>Mục đích của 2G</h1>
          <div
            className="mobile-purpose-intro"
            ref={(el) => (itemsRef.current[6] = el)}
          >
            <p>
              Ở 2G Group, chúng tôi tin rằng giáo dục là câu chuyện về sự kiên
              trì, sáng tạo và trách nhiệm – những giá trị cốt lõi để tạo nên
              một hệ sinh thái bền vững, nơi mỗi cá nhân đều có cơ hội vươn tới
              phiên bản tốt nhất của chính mình, bước ra thế giới, trở thành một
              công dân toàn cầu có bản sắc.{" "}
              <b
                style={{
                  color: "var(--recommended-light-green)",
                  textShadow: "rgba(0, 0, 0, 0.5) 1px 1px 1px",
                }}
              >
                MÔ HÌNH 3R3C
              </b>
            </p>
          </div>
          <div className="mobile-purpose-content">
            <div className="three-r">
              {threeR.map((item, index) => (
                <>
                  <div
                    className={`three-r-title ${
                      openTab === index ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => toggleTab(index)}
                  >
                    <h1>{item.title}</h1>
                  </div>
                  <div
                    className={`three-r-content ${
                      openTab === index ? "active" : ""
                    }`}
                    onClick={() => toggleTab(index)}
                  >
                    <h3>{item.title_intro}</h3>
                    <ul>
                      {item.content.map((content, index) => (
                        <li key={index}>{content}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ))}
            </div>
            <hr style={{ backgroundColor: "var(--recommended-light-green)" }} />
            <div className="three-c">
              {threeC.map((item) => (
                <>
                  <div
                    className={`three-c-title ${
                      openTab === item.title ? "active" : ""
                    }`}
                    key={item.title}
                    onClick={() => toggleTab(item.title)}
                  >
                    <h1>{item.title}</h1>
                  </div>
                  <div
                    className={`three-c-content ${
                      openTab === item.title ? "active" : ""
                    }`}
                    onClick={() => toggleTab(item.title)}
                  >
                    <h3>{item.title_intro}</h3>
                    <p>{item.content}</p>
                  </div>
                </>
              ))}
            </div>
            <hr style={{ backgroundColor: "var(--recommended-light-green)" }} />
            <div className="mobile-purpose-story">
              <h1>3 câu chuyện biểu tượng</h1>
              <div className="mobile-carousel-wrapper">
                <button
                  className="mobile-nav-btn mobile-left"
                  onClick={() => scroll("left")}
                >
                  ‹
                </button>
                <div className="mobile-carousel" ref={carouselRef}>
                  {purpose_story.map((item) => (
                    <div className="mobile-carousel-item" key={item}>
                      <h2>{item.title}</h2>
                      {item.content.map((content, index) => (
                        <p key={index}>{content}</p>
                      ))}
                    </div>
                  ))}
                </div>
                <button
                  className="mobile-nav-btn mobile-right"
                  onClick={() => scroll("right")}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile-development">
          <h1>Định hướng phát triển </h1>
          <div className="mobile-development-intro">
            <h2> Connection & Technology </h2>
          </div>

          <div className="mobile-development-content">
            <div className="development-connection">
              <h3>Connection (Network-based Growth Mindset): </h3>
              <p>
                2G Group tin rằng sức mạnh của sự kết nối chính là chìa khóa để
                mở rộng tầm ảnh hưởng và tạo ra những giá trị bền vững. 2G Group
                không chỉ nỗ lực xây dựng một hệ sinh thái giáo dục, mà còn kiến
                tạo một mạng lưới những con người cùng chung khát vọng học tập,
                phát triển và cống hiến.
              </p>
            </div>
            <div className="development-technology">
              <h3>Technology</h3>
              <p>
                {" "}
                Ở 2G Group, chúng tôi tận dụng công nghệ để rút ngắn khoảng cách
                tri thức, kết nối con người và lan toả giá trị bằng cách số hoá
                trải nghiệm học tập, xây dựng không gian kết nối linh hoạt, và
                mở rộng quy mô để tạo ra nhiều cơ hội tiếp cận giáo dục và phát
                triển bản thân cho tất cả mọi người.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile_section">
        <div className="redirect_section">
            <h3>Lời nhắn từ Founder 2G Education:</h3>
            <Link to="/founder_story"><h1>Thư ngỏ {'>'}</h1></Link>
            <h3>Đội ngũ 2G</h3>
            <Link to="/humans"><h1>2G Humans {'>'}</h1></Link>
        </div>
      </section>

      {/* <section className="mobile_section">
        <div className="mobile-humans">
          <h1>2G Humans</h1>
          <div className="mobile-humans-content">
            <h3>Đồng hành cùng chuyên gia Quốc tế - Peter Wright</h3>
            <div className="mobile-human-info">
              <div className="mobile-human-img">
                <img src="assets/humans-images/wright.jpg" alt="" />
                <h2>Peter Wright</h2>
              </div>
              <div className="mobile-human-achievement">
                <div className="mobile-human-intro">
                  <h3>
                    Chuyên gia với 25 năm kinh nghiệm, giảng dạy full-time tại
                    2G Education hơn 4 năm.
                  </h3>
                </div>
                <div className="mobile-human-achievement-content">
                  <ul>
                    <li>
                      - Cựu giám đốc học thuật tại TẬP ĐOÀN SMEAG School,
                      Philipines
                    </li>
                    <li>
                      - Trên 15 năm kinh nghiệm chấm thi tại Hội Đồng Anh và IDP
                      Education
                    </li>
                    <li>- Cựu trưởng ban Hội đồng chấm thi Cambridge Qatar</li>
                    <li>
                      - Nhiều năm kinh nghiệm đào tạo giảng viên tại Tổ chức
                      giáo dục uy tính thế giới - International House
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-humans-content">
            <h3>Đội ngũ cố vấn chuyên môn đầu ngành trong nước và Quốc tế</h3>
            <div className="mobile-human-info">
              {adviser.map((item, idx) => (
                <>
                  <div className="mobile-human-img">
                    <img src={item.image} alt="" />
                    <h2>{item.name}</h2>
                  </div>
                  <div className="mobile-human-achievement">
                    <div className="mobile-human-achievement-content">
                      <ul>
                        {item.achievements.map((item, idx) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="mobile-humans-content">
            <h3>
              2G Education sở hữu đội ngũ giảng viên chuyên môn cao, với tiêu
              chuẩn hạng A++, đạt IELTS 8.0+ / C1+, bao gồm:
            </h3>
            <ul
              style={{
                listStyleType: "none",
                color: "var(--golden-intro)",
                fontSize: "1.2rem",
                lineHeight: "1.4",
                fontWeight: "500",
                marginBottom: "0.5rem",
              }}
            >
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
            <div className="mobile-human-info">
              {teacher.map((item, idx) => (
                <>
                  <div className="mobile-human-img">
                    <img src={item.image} alt="" />
                    <h2>{item.name}</h2>
                  </div>
                  <div className="mobile-human-achievement">
                    <div className="mobile-human-intro">
                      <h3>{item.intro}</h3>
                    </div>
                    <div className="mobile-human-achievement-content">
                      <ul>
                        {item.achivements.map((item, idx) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default MobileOverlay;
