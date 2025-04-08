import ChatBubble from "../ChatBubbles/ChatBubble";
import Footer from "../Footer/Footer";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./mobileOverlay.css";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const MobileOverlay = () => {
  const [openTab, setOpenTab] = useState(null);

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
      title: "3 tinh thần hướng tới: Resilience, Reimagine, Responsibility",
      sectionTitle: "3 Tinh thần hướng tới",
      content: [
        {
          title: "Resilience",
          description: [
            "Sức mạnh của sự bền bỉ và nội lực.",
            "Luôn đặt chất lượng trên lợi ích ngắn hạn.",
            "Kiên trì theo đuổi giá trị cốt lõi, tin vào nội lực bên trong của mỗi người.",
          ],
        },
        {
          title: "Reimagine",
          description: [
            "Không ngại thử nghiệm, đổi mới trong các phương pháp đào tạo và mô hình kinh doanh.",
            "Luôn cập nhật xu hướng giáo dục toàn cầu, ứng dụng công nghệ để tối ưu trải nghiệm học tập.",
            "Khuyến khích tư duy sáng tạo, chủ động, linh hoạt trong mọi khía cạnh từ giảng dạy đến quản trị.",
          ],
        },
        {
          title: "Responsibility",
          description: [
            "Cam kết đồng hành cùng học viên, đối tác và đội ngũ nhân sự.",
            "Xây dựng môi trường làm việc đề cao sự gắn kết và phát triển cá nhân.",
            "Tạo ra tác động tích cực, không chỉ trong giáo dục mà còn trong cộng đồng.",
          ],
        },
      ],
    },
    {
      title: "3 giá trị cốt lõi: Care, Credibility, Contribution",
      sectionTitle: "3 Giá trị cốt lõi",
      content: [
        {
          title: "Sống tử tế (Care)",
          description: [
            " - Sự tử tế không chỉ là một phẩm chất cá nhân mà còn là cách 2G vận hành mọi hoạt động. Tử tế trong cách giáo dục – luôn lắng nghe, thấu hiểu và hỗ trợ học viên, phụ huynh. Tử tế trong cách làm việc – tôn trọng, hợp tác chân thành với đồng đội và đối tác. Và tử tế với cộng đồng – lan tỏa những giá trị tốt đẹp, tạo nên môi trường học tập và làm việc đầy cảm hứng, nhân văn.",
          ],
        },
        {
          title: "Sống liêm chính (Credibility)",
          description: [
            " - Chúng tôi tin rằng thành công bền vững phải dựa trên sự tin tưởng và cam kết lâu dài với học viên, đối tác và cộng đồng. Từ việc chú tâm xây dựng chương trình học, phương pháp đào tạo và giá trị thực sự để đảm bảo học viên nhận được đúng những gì họ cần, đến việc công khai mọi thông tin với đối tác và đội ngũ và luôn ưu tiên giữ vững đạo đức nghề nghiệp, chúng tôi luôn cố gắng hướng tới sự minh bạch và tạo ra môi trường học tập công bằng, hiệu quả.",
          ],
        },
        {
          title: "Sống cống hiến (Contribution)",
          description: [
            " - Chúng tôi tin rằng giáo dục có sức mạnh thay đổi cuộc sống và tạo ra những tác động tích cực lâu dài. Mỗi bước đi của 2G đều có sự tính toán đến ảnh hưởng đối với cộng đồng, hướng tới việc hỗ trợ học tập cho đa dạng các đối tượng, đặc biệt là các bạn trẻ có hoàn cảnh khó khăn. Vì vậy, 2G Group đã lập ra quỹ giáo dục Glocal Villagers, liên tục tổ chức các hoạt động xã hội hàng năm, và không ngừng xây dựng những chương trình mang lại giá trị thực cho cộng đồng.",
          ],
        },
      ],
    },
    {
      title: "3 câu chuyện biểu tượng",
      sectionTitle: "3 Câu chuyện biểu tượng",
      content: [
        {
          title: "Câu chuyện cây tre",
          description: [
            "- Tre không vội vã. Tre cắm rễ sâu, tích tụ sức mạnh, rồi vươn thẳng lên trời – mạnh mẽ nhưng vô cùng linh hoạt. Đó cũng là lí do 2G Group lấy hình ảnh cây tre làm hình ảnh biểu tượng chủ đạo.",
            "- Founder của 2G Group - anh Lê Văn Hải đã từng chia sẻ, càng trưởng thành, anh càng cảm nhận sâu sắc gốc rễ – gia đình, cộng đồng, và di sản Việt Nam đã định hình anh. Với anh, cây tre không chỉ là một loại cây, mà là biểu tượng của bản sắc.",
            "- Sẽ mất hàng năm để rễ tre đan xen cắm chặt dưới lòng sâu trước khi vươn thẳng lên trời, mạnh mẽ và nhanh chóng. Anh học từ đó: muốn vươn cao, phải xây nền móng vững – trong công việc, trong đời sống. Tre phát triển theo từng cụm và lớn lên theo từng đốt, luôn hướng tới mây xanh. Đó cũng là hình ảnh mà anh muốn mọi người liên tưởng tới khi biết đến 2G Group.",
            "- 2G Group kiên nhẫn xây dựng nền tảng – từ chất lượng đào tạo, chất lượng con người đến sự minh bạch trong vận hành – để tạo nên một hệ thống giáo dục bền vững, nơi mọi cá nhân cùng vươn lên từ gốc rễ mạnh mẽ của chính mình.",
          ],
        },
        {
          title: "Câu chuyện The Dots",
          description: [
            "- Lấy cảm hứng từ câu chuyện của Steve Jobs, người từng kể về những “dấu chấm” trong đời mình: bỏ đại học, học thư pháp, làm việc không mục đích rõ ràng, dường như trong thời điểm đó, mọi thứ Steve Jobs làm đều chưa có ý nghĩa rõ ràng.",
            "- Nhưng khi nhìn lại, anh nhận ra chính những dấu chấm ấy – sự tò mò, những bước đi lệch hướng – đã nối lại để tạo nên những viên gạch vững chắc cho Apple - một thương hiệu đã thay đổi cả thế giới công nghệ.",
            "- Ở 2G Group, chúng tôi sống với tinh thần ấy. Mỗi ý tưởng mới, mỗi ứng dụng công nghệ, mỗi thay đổi trong cách dạy và học, mỗi cá nhân thành công trong việc bước ra thế giới là một dấu chấm nhỏ. Chúng tôi tin vào việc nối những dấu chấm nhỏ đó, biến sự ngẫu nhiên thành sáng tạo, biến câu chuyện cá nhân thành cảm hứng cộng đồng, từ đó tạo ra một mạng lưới những cá nhân xuất sắc, dám sống và dám mơ.",
          ],
        },
        {
          title: "Câu chuyện Connect the 'Đốt'",
          description: [
            "Tre cắm rễ, vươn từng đốt.",
            "- Dấu “dots” nhỏ, ý tưởng lớn.",
            "2G Group biến Connect the dots thành Connect the “đốt” với tham vọng phá bỏ rào cản giáo dục toàn cầu, xây dựng một hệ sinh thái giáo dục, gắn thế hệ trẻ với tri thức, vững gốc mà vươn xa.",
          ],
        },
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
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
      name: "THẦY WARREN ENG",
      achievements: [
        "- Chuyên gia giáo dục người Singapore",
        "- Cựu Hiệu trưởng UEF HCMC",
        "- Cố vấn chiến lược và phát triển chương trình",
      ],
    },

    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
      name: "CÔ TRANG PHAN",
      achievements: [
        "- CThạc sĩ TESOL",
        "- Giám đốc điều hành Hội Đồng Giáo Dục Văn Hoá Canada – Việt Nam",
        "- Chuyên gia đào tạo phương pháp giảng dạy cho giáo viên",
      ],
    },

    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
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
      image:
        "assets/humans-images/human_1.jpg",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
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
      image:
        "assets/humans-images/human_2.jpg",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
      intro: "GIÁO VIÊN IELTS",
      achivements: [
        "- Một trong số ít Giảng viên Tiếng Anh đạt trình độ CPE Level C2 (IELTS 8.5) Quốc tế tại Việt Nam",
        "- Hơn 05 năm kinh nghiệm giảng dạy IELTS từ cơ bản đến nâng cao",
        "- Tốt nghiệp chứng chỉ Giảng dạy Quốc tế TESOL",
      ],
    },
    {
      name: "TIFFANY",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
      intro: "GIÁO VIÊN TIẾNG ANH - MẦM NON/ TIỂU HỌC",
      achivements: [
        "- Tốt nghiệp cử nhân khoa học tại Cebu, Philippines",
        "- Sở hữu chứng chỉ giảng dạy tiếng Anh TEFL",
        "- Sở hữu chứng chỉ C1 châu Âu",
        "- Hoàn thành chứng chỉ giảng dạy IELTS",
        "- 11 năm kinh nghiệm giảng dạy tiếng Anh",
      ],
    },
    {
      name: "GAB",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
      intro: "GIÁO VIÊN TIẾNG ANH - MẦM NON/ TIỂU HỌC",
      achivements: [
        "- Tốt nghiệp đại học St. La Salle-bacolod",
        "- Thạc sỹ giáo dục chuyên ngành ngôn ngữ Anh",
        "- Sở hữu chứng chỉ C2 EF SET",
        "- Có hơn 15 năm kinh nghiệm giảng dạy tại các trường và hệ thống giáo dục lớn ở Philipine và Việt Nam, đặc biệt có nhiều kinh nghiệm giảng dạy Phonics cho lứa tuổi nhỏ",
      ],
    },
    {
      name: "ZSANDRA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
      intro: "",
      achivements: [
        "- Tốt nghiệp cử nhân sư phạm trung học cơ sở, chuyên ngành giảng dạy tiếng Anh",
        "- Có 7 năm kinh nghiệm giảng dạy, từng là giảng viên của đại học CEBU và trưởng nhóm học vụ tại học viện Anh ngữ SMEAG Philippines",
        "- Sở hữu chứng chỉ giảng dạy quốc tế TESOL",
      ],
    },
    {
      name: "MR. TOÀN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
      intro: "",
      achivements: [
        "- Tốt nghiệp cử nhân Đại học kinh tế Quốc Dân",
        "- IELTS 8.0, sở hữu chứng chỉ giảng dạy quốc tế CELTA (Pass A)",
        "- 5 năm kinh nghiệm trong lĩnh vực tổ chức trại hè quốc tế & giảng dạy IELTS",
        "- Sở hữu chứng chỉ đào tạo giáo viên IELTS do IDP Education cấp",
      ],
    },
    {
      name: "TUẤN ANH",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
      intro: "",
      achivements: [
        "- Tốt nghiệp loại xuất sắc chuyên ngành sư phạm Anh, trường Đại học Ngoại ngữ Huế.",
        "- Học bổng thạc sĩ TESOL tại Đại học Huddersfield, Anh",
        "- IELTS Overall 8.0 trong đó Listening và Reading 8.5, Speaking 8.0",
        "- 5 năm kinh nghiệm giảng dạy IELTS & tiếng Anh du học, định cư",
      ],
    },
    {
      name: "LINH NGUYEN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkYHn6tWG4KYBXLMANz77kX_LcwojTEXJjA&s",
      intro: "",
      achivements: [
        "- Tốt nghiệp Thạc sỹ chuyên ngành Quản lý Tài nguyên Nước, trường Đại học KU Leuven, Vương quốc Bỉ",
        "- IELTS Overall 8.5 (Listening 8.5, Reading 9.0, Writing 7.5, Speaking 8.0)",
        "- Đỗ học bổng VLIR-UOS của Chính phủ Bỉ, học bổng ERASMUS MUNDUS của Liên minh Châu Âu, học bổng MEXT của Chính phủ Nhật Bản",
        "- Hơn 3 năm kinh nghiệm giảng dạy tiếng Anh thiếu nhi và luyện thi IELTS",
      ],
    },
  ];
  return (
    <>
      <section className="mobile_section">
        <div className="mobile_intro">
          <div className="main_name">
            <h3 className="company_name">2G Group</h3>
            <h1 className="connect">Connect</h1>
            <h1 className="the">the</h1>
            <h1 className="dots">"Đốt"</h1>
          </div>
        </div>

        <div className="mobile-intro-second-group">
          <div className="english">ANH NGỮ</div>
          <div className="english-second">TOÀN DIỆN</div>
          <div className="camping">TRẠI HÈ</div>
          <div className="aboard">DU HỌC </div>
        </div>

        <div className="explaination">
          <div className="company-explain">
            <p>
              {" "}
              2G Group là một hệ thống giáo dục toàn diện, giúp thế hệ trẻ Việt
              hội nhập toàn cầu thông qua việc đào tạo và du học.
            </p>
          </div>
          <div className="theme-explain">
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
                message="Hello, What are they saying?"
                isSender={false}
              />
              <ChatBubble message="No" isSender={true} />
              <ChatBubble
                message="Not yet! What are you thinking?"
                isSender={false}
              />
              <ChatBubble message="I'm thinking about it" isSender={true} />
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
          <p className="mobile_bounce">↓</p>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile-services">
          <h1>Hệ sinh thái giáo dục của 2G</h1>
          <div className="product-carousel">
            <div className="product-carousel-inner">
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
            </div>
          </div>
        </div>
        <p className="mobile_bounce ">↓</p>
      </section>

      <section className="mobile_section">
        <div className="mobile-purpose">
          <h1>Mục đích của 2G</h1>
          <div className="mobile-purpose-intro">
            <p>
              Ở 2G Group, chúng tôi tin rằng giáo dục là câu chuyện về sự kiên
              trì, sáng tạo và trách nhiệm – những giá trị cốt lõi để tạo nên
              một hệ sinh thái bền vững, nơi mỗi cá nhân đều có cơ hội vươn tới
              phiên bản tốt nhất của chính mình, bước ra thế giới, trở thành một
              công dân toàn cầu có bản sắc.{" "}
              <b style={{ color: "var(--green-intro)" }}>MÔ HÌNH 3R3C</b>
            </p>
          </div>
          <div className="mobile-purpose-content">
            {tabs.map((tab, index) => (
              <div key={index} className="purpose-content-name">
                {/* Tab Header */}
                <div
                  className={`tab ${openTab === index ? "active" : ""}`}
                  onClick={() => toggleTab(index)}
                >
                  <div className="tab-opener-text">{tab.title}</div>
                  <div className="tab-opener">
                    <span
                      className={`tab-bar ${openTab === index ? "active" : ""}`}
                    ></span>
                    <span
                      className={`tab-bar ${openTab === index ? "active" : ""}`}
                    ></span>
                  </div>
                </div>

                {/* Tab Content */}
                <div
                  className={`purpose-inner-content ${
                    openTab === index ? "active" : ""
                  }`}
                >
                  <h2>{tab.sectionTitle}</h2>
                  <div>
                    {tab.content.map((item, idx) => (
                      <div key={idx} className={`purpose-item ${item.color}`}>
                        <h3>{item.title}</h3>
                        <ul>
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
        <div className="mobile-founder-container">
          <h1>2G Founder Profile</h1>
          <div className="mobile-founder-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
              alt=""
            />
            <h2>Lê Văn Hải</h2>
          </div>
          <div className="mobile-founder-info">
            {founder_profile.map((item, idx) => (
              <p key={idx}>{item.info}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile-humans">
          <h1>2G Humans</h1>
          <div className="mobile-humans-content">
            <h3>Đồng hành cùng chuyên gia Quốc tế</h3>
            <div className="mobile-human-info">
              <h3>Peter Wright</h3>
              <div className="mobile-human-img">
                <img
                  src="assets/humans-images/wright.jpg"
                  alt=""
                />
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
      </section>

      <Footer />
    </>
  );
};

export default MobileOverlay;