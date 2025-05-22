import React from "react";
import "./NewInstructors.css";
import FlipCard from "../../componenets/FlipCard/FlipCard";
import Navbar from "../../componenets/Navbar/Navbar";
import Footer from "../../componenets/Footer/Footer";

const NewInstructors = () => {
  const cards = [
    {
      id: 1,
      image: "assets/humans-images/founder.jpg",
      name: "Lê Văn Hải",
      position: "Founder & CEO",
      profile: [
        "Là cựu học sinh chuyên Anh - Trường THPT chuyên Phan Bội Châu",
        "Tốt nghiệp chương trình Quản trị trường Anh ngữ tại Mỹ do hiệp hội TESOL quốc tế cấp, khóa học về khởi nghiệp sáng tạo dành cho doanh nhân trẻ tại Hà Lan",
        "Hơn 7 năm sáng lập và điều hành tổ chức giáo dục 2G - Education",
        "Đã trải nghiệm hơn 28 quốc gia như Châu Âu, Bắc Mỹ, Thổ Nhĩ Kỳ,... và đồng thời sở hữu thẻ PR Thổ Nhĩ Kỳ theo hiện đầu tư",
      ],
      pov: [],
    },
    {
      id: 2,
      image: "assets/humans-images/Peter.jpg",
      name: "Peter Wright",
      position: "Cố vấn chuyên môn",
      profile: [
        "Chuyên gia với 25 năm kinh nghiệm, giảng dạy full-time tại 2G Education hơn 4 năm.",
        "Cựu giám đốc học thuật tại TẬP ĐOÀN SMEAG School, Phillipines",
        "Trên 15 năm kinh nghiệm chấm thi tại Hội Đồng Anh và IDP Education",
        "Cựu trưởng ban Hội đồng chấm thi Cambridge Qatar",
        "Nhiều năm kinh nghiệm đào tạo giảng viên tại Tổ chức giáo dục uy tín thế giới - International House",
      ],
      pov: [
        "Looking back six years ago when I first set foot in 2G, I feel truly happy to have contributed to its journey — from a small center in To Ngoc Van Alley, Vinh City, to now a growing education ecosystem, and then opening an official IELTS test center in Ho Chi Minh City.",
        "What impresses me the most about 2G is its commitment to authentic education. It’s not just about chasing IELTS scores or international certificates — it’s about nurturing long-term language development that lasts far beyond exams.",
      ],
    },
    {
      id: 3,
      image: "assets/humans-images/KhanhVan.jpg",
      name: "Nguyễn Ngọc Khánh Vân",
      position: "Đồng sáng lập, trưởng BTC trại hè quốc tế EUREKA CAMPS",
      profile: [
        "Học bổng chính phủ Úc AAS khóa 2025, Master of Business Analytics, Monash University",
        "Tốt nghiệp loại giỏi Trường Đại học Ngoại thương khóa 2021, Bachelor of International Business",
        "Chuyên viên Nghiên cứu và phát triển, tập đoàn Gemadept",
        "Chủ tịch CLB Enactus kinh doanh xã hội, DH ngoại Thương Hà Nội nhiệm kỳ 2019-2020",
        "Trưởng ban đối ngoại, dự án teen Entrepreneurship bootcamp tài trợ bởi Đại sứ quán Hoa kỳ",
        "Đại diện Việt Nam tham dự Youth For Change Festival 2019 tại Hài Quốc",
        "Cựu học sinh lớp chuyên Anh - trường THPT Chuyên Phan Bội Châu, sở hữu IELTS 8.0, SAT 1400",
      ],
      pov: [
        "Tôi tham gia tổ chức trại hè quốc tế Eureka Camps từ khi mới còn là sinh viên năm 2 đại học. Mặc dù đã có những trải nghiệm quốc tế trước đó nhưng nhiệm vụ này vẫn khiến tôi lo lắng. Tuy nhiên, niềm tin của founder chương trình, cũng chính là CEO của 2G, đã tiếp thêm động lực cho tôi hoàn thành nhiệm vụ này.",
        "Thành công nối tiếp thành công, giờ đây, khi đã trở thành Giám đốc của dự án Eureka Camps, tôi rất biết ơn cơ hội được trao quyền, nhưng vẫn luôn được đồng hành, hỗ trợ từ tổ chức.  Điều khiến tôi gắn bó lâu dài với 2G chính là cách tổ chức này đặt niềm tin và đầu tư nghiêm túc vào người trẻ. Chỉ cần bạn có nhiệt huyết và có cam kết, những ý tưởng, khát khao, mong muốn sẽ luôn được lắng nghe và chung tay hiện thức hóa.",
        "Tôi luôn tự hào vì được góp phần xây dựng một môi trường giáo dục mở – nơi mỗi trại hè là một hành trình đáng nhớ, giúp học sinh bước ra khỏi vùng an toàn và khám phá chính mình.",
      ],
    },
    {
      id: 4,
      image: "assets/humans-images/LeNguyen.jpg",
      name: "Lê Thị Nguyên",
      position: "Quản lý hệ thống nhân sự và vận hành dịch vụ",
      profile: [
        "4 năm kinh nghiệm làm việc tại Tập đoàn viễn thông quân đội Viettel",
        "Hơn 5 năm kinh nghiệm làm việc tại các hệ thống giáo dục lớn",
        "Cử nhân chuyên ngành ngôn ngữ Anh",
        "Tốt nghiệp các khóa học chuyên sâu: Quản lý nhân sự hiện đại, quản lý thiết yếu cho người làm giáo dục,...",
        "Giữ nhiều vị trí quan trọng và giành được nhiều giải thưởng xuất sắc trong tổ chức 2G Education",
        "Dẫn đoàn trại hè đi Singapore trải nghiệm",
      ],
      pov: [
        "Gắn bó với 2G Education từ năm 2019, tôi cảm nhận rõ từng giai đoạn phát triển đều in dấu sự nỗ lực bền bỉ và lựa chọn có phần không dễ dàng của tổ chức. Dù đối mặt với nhiều thay đổi, 2G vẫn kiên trì giữ gìn những giá trị cốt lõi đã định hình từ đầu.Tôi trân trọng tinh thần dám hy sinh lợi ích ngắn hạn để theo đuổi mục tiêu dài hạn – điều không phải tổ chức nào cũng có thể làm được.",
        "Chính sự nhất quán đó tạo nên một môi trường mà mỗi người đều có cơ hội lớn lên một cách vững vàng, cùng 2G. Tôi biết ơn vì đã được là một phần trong chặng đường đó.",
      ],
    },
    {
      id: 5,
      image: "assets/humans-images/VoThiThuong.jpg",
      name: "Võ Thị Thương",
      position: "Trưởng phòng vận hành và dịch vụ CSKH chi nhánh Nghệ An",
      profile: [
        "Chức vụ: Trưởng phòng vận hành và dịch vụ CSKH chi nhánh  NA",
        "Cử nhân loại Giỏi  trường Bách Khoa Đà Nẵng",
        "Kinh nghiệm hơn 4 năm làm trong lĩnh vực Giáo dục",
        "Giữ nhiều vị trí quan trọng và giành được nhiều giải thưởng xuất sắc trong tổ chức 2G Education",
      ],
      pov: [],
    },
    {
      id: 6,
      image: "assets/humans-images/ThuyNgoc.jpg",
      name: "Lương Ngọc Thủy",
      position: "Giám đốc chi nhánh Nghệ An",
      profile: [
        " Giám đốc chi nhánh Nghệ An kiêm Giám đốc tài chính",
        "Có nhiều kinh nghiệm làm ở những tập đoàn có quy mô nhân sự lớn",
        "Liên tục đạt danh hiệu quản lý xuất sắc tại 2G",
      ],
      pov: [
        "Với tôi, giáo dục không chỉ là việc dạy và học, mà là hành trình cùng nhau trưởng thành.",
        "Ở 2G, điều tôi trân quý nhất là tinh thần học tập không ngừng – không chỉ nơi học sinh, mà ở cả đội ngũ nhân sự. Mỗi ý tưởng đều được lắng nghe, mỗi nỗ lực đều được ghi nhận, và mỗi người đều có cơ hội để lớn lên trong công việc mình đang làm.",
        "Tôi tin rằng 2G đang gieo những hạt giống bền vững – trong lòng học sinh và cả trong những người đang cùng nhau làm giáo dục mỗi ngày.",
      ],
    },
    {
      id: 7,
      image: "assets/humans-images/TranThiTinh.jpg",
      name: "Trần Thị Tịnh",
      position: "Trưởng phòng tuyển sinh chi nhánh Nghệ An",
      profile: [
        "Cử nhân tiếng Anh Thương Mại ĐH Thương Mại",
        "8 năm trong lĩnh vực tư vấn & bán hàng trong đó có 5 năm làm Giáo dục",
        "Từng đảm nhiệm vị trí giám đốc trung tâm JAXTINA và giành được các giải thưởng: Top1: Nhân viên tư vấn xuất sắc liên tục 2 năm Top1: Giám sát cơ sở có kết quả kinh doanh top 3 Khu vực Hồ Minh",
      ],
      pov: [
        "Giáo dục với mình là hành trình đầy ý nghĩa, nơi mình có thể giúp đỡ nhiều người thông qua công việc mỗi ngày. Mình luôn tâm niệm rằng giáo dục chính là sự dấn thân và phục vụ mỗi ngày, là những trăn trở không ngừng về những điều đã, đang và sắp làm. Điều làm mình hạnh phúc nhất là được đồng hành cùng các đồng nghiệp và học sinh – những người luôn tiếp thêm động lực và niềm vui trong công việc của mình",
      ],
    },
    {
      id: 8,
      image: "assets/humans-images/CaoThiNgoc.jpg",
      name: "Cao Thị Ngọc",
      position: "Giám đốc chi nhánh Hà Tĩnh",
      profile: [
        "Th.s Quản lý giáo dục - ĐHQGHN",
        "Gần 15 năm kinh nghiệm trong lĩnh vực giáo dục",
        "Từng là CEO & Fouder Hệ thống giáo dục Starlink",
      ],
      pov: [
        "Đối với tôi giáo dục vừa là đam mê, vừa là sứ mệnh, là hành trình khai phá những giới hạn của bản thân mỗi người. Tôi đến 2G với những cơ duyên đầy bất ngờ, nhưng những trải nghiệm ở đây về giáo dục 'sự tử tế' và  'sự thật' khiến tôi tin rằng tôi tìm được một mảnh ghép hoàn hảo cho con đường tôi đã chọn!",
      ],
    },
    {
      id: 9,
      image: "assets/humans-images/TrinhDinhTuanAnh.jpg",
      name: "Trịnh Đình Tuấn Anh",
      position: "Academic ESL & IELTS Expert",
      profile: [
        "Nghiên cứu sinh Tiến sĩ về Quản trị Kinh doanh tại Đại học Gloucestershire",
        "Nghiên cứu sinh Tiến sĩ tại Khoa Quản trị, Viện Kinh doanh Quốc tế, Đại học Quốc gia Thành Công (Đài Loan)",
        "Thành viên của Hiệp hội Kế toán Công chứng Anh Quốc (ACCA)",
        "Thạc sĩ hạng Xuất sắc Khoa học (MSC) chuyên ngành Kinh doanh Quốc tế tại Đại học Ulster.",
        "Giảng viên khoa Quản trị kinh doanh, trường Kinh tế, trường Đại học Vinh",
        "Có nhiều kinh nghiệm trong lĩnh vực phát triển kinh doanh trong ngành giải trí, du lịch và lữ hành",
      ],
      pov: [
        "Là một giảng viên đại học và nghiên cứu sinh tiến sĩ, tôi từng có nhiều cơ hội làm việc trong các môi trường học thuật, và với tôi giáo dục không chỉ là kiến thức, mà còn là sự tử tế, là mong muốn nâng đỡ những hành trình cá nhân bằng tất cả sự chân thành. Quan điểm này cũng tương đồng với quan điểm giáo dục mà 2G đang theo đuổi, và đó cũng chính là một trong những lý do khiến tôi mong muốn gắn bó lâu dài với 2G.",
        " Ở 2G, tôi có cơ hội kết nối với những bạn trẻ đang chuẩn bị hành trang hội nhập toàn cầu – và điều đó khiến công việc giảng dạy trở nên thú vị và cảm hứng hơn. Tôi thoải mái với môi trường học thuật tại đây: chuyên môn được coi trọng, nhưng không hề khô cứng; sự sáng tạo luôn được khuyến khích, nhưng vẫn giữ được tính kỷ luật. 2G cho tôi không gian để chia sẻ, học hỏi và phát triển, không chỉ với vai trò một người thầy mà còn là một người đồng hành trong hành trình giáo dục toàn diện.",
      ],
    },
    {
      id: 10,
      image: "assets/humans-images/NguyenThiNam.jpg",
      name: "Nguyễn Thị Nam",
      position: "Trưởng nhóm tuyển sinh Khối IELTS",
      profile: [
        "Tốt nghiệp cử nhân khoa kinh tế",
        "Đạt chứng chỉ HSK cấp 4",
        "Thành viên của Hiệp hội Kế toán Công chứng Anh Quốc (ACCA)",
        "Đạt giải “Unmatched Dedication” 2022, “Outstanding performance, hard work and dedication” 2023 và “Outstanding Employee Award” 2024 tại 2G Education",
        "Hơn 4 năm kinh nghiệm làm việc tại các hệ thống lớn trong lĩnh vực giáo dục",
        ,
      ],
      pov: [
        "Giáo dục là hành trình đánh thức tư duy, khai mở nhân cách, và nuôi dưỡng giá trị sống.",
        "Trải nghiệm tại 2G: Công việc có lúc áp lực, vất vả, nhưng chính những khoảnh khắc nhìn thấy học sinh thay đổi từng ngày và đạt được thành tựu nhất định - điều đó khiến mình quên đi hết thảy những khó khăn và luôn vững tin vin vào giá trị mình đang trao đi.",
      ],
    },
    {
      id: 11,
      image: "assets/humans-images/default.jpg",
      name: "Khánh Hà Tĩnh",
      position: "",
      profile: ["", "", "", "", ""],
      pov: ["", ""],
    },
    {
      id: 12,
      image: "assets/humans-images/TranLiNa.jpg",
      name: "Trần Li Na",
      position: "Trưởng ban tuyển sinh, vận hành trại hè quốc tết Eureka Camps",
      profile: [
        "Sở hữu hơn 6 năm kinh nghiệm Quản lý vận hành các hệ thống Anh ngữ lớn trên toàn quốc",
        "Sở hữu chứng chỉ giảng dạy quốc tế TESOL (2022)",
        "Cử nhân loại giỏi trường Đại học Kinh tế quốc dân",
        "Đội phó tài chính & Phó ban chương trình Đội sinh viên tình nguyện đồng hương Nghệ An – Hà Tĩnh, trường Đại học KTQD",
        "Cựu học sinh lớp chuyên Anh – Trường THPT Chuyên Phan Bội Châu, giải nhì Kỳ thi HSG môn Tiếng Anh tỉnh Nghệ An 2012",
      ],
      pov: [
        "Gia nhập 2G từ năm 2020, hành trình gần 5 năm đồng hành với 2G đã trở thành bước ngoặt làm thay đổi hoàn toàn thế giới của tôi – cả theo nghĩa đen lẫn nghĩa bóng. Từ một nhân sự bắt đầu ở phòng Tuyển sinh, rồi đến Phòng Đào tạo và hiện tại là người phụ trách mảng Du học & Trại hè, tôi không chỉ được thử sức qua nhiều vai trò mà còn được trao quyền thật sự để khám phá những phiên bản tiềm ẩn bên trong mình.",
        "Nhờ 2G, tôi đã đặt chân đến Singapore, Úc và sắp tới là New Zealand – những cơ hội học tập, quan sát và trưởng thành trong môi trường quốc tế mà nếu không có 2G, có lẽ tôi sẽ chẳng bao giờ có được. Ở đây, 2G không chỉ nuôi dưỡng học sinh trở thành công dân toàn cầu, mà còn mở ra cánh cửa để chính đội ngũ nhân sự cũng được “Go Global”, trưởng thành qua từng lần thử sức. Chính triết lý ấy đã khiến tôi biết ơn, gắn bó và mong muốn tiếp tục lan tỏa những giá trị mà 2G đã tin tưởng đặt vào tôi từ những ngày đầu.",
      ],
    },
    {
      id: 13,
      image: "assets/humans-images/NguyenThiThuHuong.jpg",
      name: "Nguyễn Thị Thu Hường",
      position: "Quản lý vận hành phòng đào tạo",
      profile: [
        "Tốt nghiệp chuyên ngành sư phạm, Đại học Vinh",
        "Kinh nghiệm 9 năm hoạt động trong lĩnh vực giáo dục.",
        "5 năm kinh nghiệm quản lý tại các trung tâm Anh ngữ lớn.",
      ],
      pov: [
        "Trong suốt thời gian làm việc tại 2G Education, tôi càng khẳng định rằng một đội ngũ giáo viên mạnh không chỉ dựa vào chuyên môn, mà còn cần có tinh thần hợp tác, sự chủ động học hỏi và lòng yêu nghề chân thành. Trải nghiệm đồng hành cùng các giáo viên tại 2G cho tôi thấy khi được tạo điều kiện phát triển và chia sẻ kinh nghiệm, giáo viên không chỉ nâng cao chất lượng giảng dạy mà còn tạo nên môi trường học tập tích cực, truyển cảm hứng cho học sinh trên con đường phát triển,dẫn dắt các em tự tin bước vào tương lai.",
      ],
    },
    {
      id: 14,
      image: "assets/humans-images/ThuyTien.jpg",
      name: "Phạm Thùy Tiên",
      position: "Chuyên viên phòng đào tạo",
      profile: [
        "Tốt nghiệp loại giỏi ngành Sư Phạm Anh",
        "Hơn 7 năm kinh nghiệm làm việc trong lĩnh vực giáo dục ở các hệ thống Anh ngữ lớn như Apax English, Galaxy Education.",
        "Từng đảm nhiệm vị trí Operation Leader tại Apax English Vinh.",
        "Sở hữu chứng chỉ FCE",
      ],
      pov: [
        "'Education is not the filling of a pail, but the lighting of a fire.' – William Butler Yeats.",
        "Với mình giáo dục không chỉ là việc truyền đạt một chương trình có sẵn, mà là sự khơi mở, là chiếc cầu nối giữa kiến thức và khát vọng, là hành trình đồng hành giúp học sinh khám phá tiềm năng của chính mình.",
        "Tại 2G, đội ngũ thầy cô và nhân sự luôn nỗ lực không ngừng, bền bỉ để gieo tinh thần ấy đến với từng thế hệ học sinh, thông qua các khóa học học thuật, chương trình ngoại khóa, trại hè và cả hoạt động tư vấn du học, với mục tiêu giúp các con trở thành Global Generation – những công dân toàn cầu không chỉ giỏi về ngôn ngữ, mà còn giàu tư duy phản biện, khả năng thích nghi và bản lĩnh hội nhập. Và đó cũng là điều khiến mình yêu công việc này mỗi ngày.",
      ],
    },

    {
      id: 15,
      image: "assets/humans-images/ChuMinhThuy.jpg",
      name: "Chu Minh Thùy",
      position: "Giáo viên IELTS & Aptis",
      profile: [
        "Tốt nghiệp cử nhân ngành Kinh tế quốc tế, Học viện Ngoại giao Việt Nam.",
        "Hai lần đạt IELTS 8.0 overall, trong đó lần thi gần nhất Reading 9.0 và Speaking 8.0",
        "Sở hữu chứng chỉ quốc tế về kỹ năng và phương pháp giảng dạy tiếng Anh TESOL",
        "Hơn 2 năm kinh nghiệm giảng dạy IELTS tại các trường Anh ngữ và 2 năm công tác tại vị trí trưởng nhóm phát triển học liệu tại hệ thống giáo dục Galaxy Education.",
        "Là dịch giả của nhiều một số đầu sách từ tiếng Anh, bao gồm một tác phẩm Best-seller do New York Times bầu chọn.",
      ],
      pov: [
        "Tôi tin rằng giáo dục không chỉ là truyền đạt kiến thức mà còn là hành trình khơi dậy niềm tin và cảm hứng trong mỗi học viên. Tại 2G, tôi thấy rõ một môi trường học tập đầy nhân văn, nơi mỗi học sinh được lắng nghe, thấu hiểu và phát triển theo cách riêng của mình. Đội ngũ giáo viên không ngừng đổi mới phương pháp, kết hợp giữa chuyên môn vững vàng và sự tận tâm.",
      ],
    },

    {
      id: 16,
      image: "assets/humans-images/NguyenCongThanh.jpg",
      name: "Nguyễn Công Thành",
      position: "Giáo viên IELTS & Aptis",
      profile: [
        "Tốt nghiệp loại giỏi chuyên ngành quản trị kinh doanh tại trường Wisconsin  International University in Ukraine.",
        "IELTS Overall 8.0 ( Listening 8.5, Reading 8.5, Speaking 8.0).",
        "Hơn 6 năm kinh nghiệm giảng dạy và luyện thi IELTS 4 kỹ năng",
        "14 năm sinh sống, học tập và làm việc tại các nước châu Âu, Mỹ: Ukraine, Nga, Đức, Canada.",
      ],
      pov: [
        "Với tôi, giáo dục là hành trình đồng hành và phát triển cùng người học, không chỉ dừng lại ở kiến thức. Tại 2G, tôi không chỉ giảng dạy mà còn tham gia xây dựng chương trình, đào tạo giáo viên và cải thiện chất lượng giảng dạy cho cả những lớp học có đầu vào yếu. Môi trường ở đây đề cao tinh thần lắng nghe, hợp tác và luôn thúc đẩy sự thay đổi dựa trên nhu cầu thực tế. 2G là nơi giúp tôi định hình rõ hơn về triết lý giáo dục mà mình theo đuổi.",
      ],
    },

    {
      id: 17,
      image: "assets/humans-images/NguyenThaoLy.jpg",
      name: "Nguyễn Thảo Ly",
      position: "Head teacher khối mầm non - tiểu học",
      profile: [
        "Tốt nghiệp Học viện Bưu chính Viễn thông",
        "Chứng chỉ giảng dạy tiếng Anh Quốc Tế TESOL",
        "Có kinh nghiệm gần 5 năm giảng dạy tiếng Anh tổng quát, tiếng anh cho học sinh từ các level Starters, Flyers, Movers, Ket, Pet, IELTS tại một số trung tâm tiếng Anh ở Hà Nội và Vinh.",
        "IELTS 8.0, trong đó Listening 7.5 (valid until O2027).",
      ],
      pov: [
        "2G Education hướng tới phương pháp giáo dục lấy học sinh làm trung tâm, tập trung vào trải nghiệm học tập cá nhân hóa và sự phát triển bền vững. Học sinh được xây dựng nền tảng tiếng Anh vững chắc thông qua quá trình tư duy, thực hành và trải nghiệm tích cực. Giáo viên tại 2G đóng vai trò là người dẫn dắt và đồng hành, cùng khám phá ngôn ngữ, từ đó giúp học sinh nuôi dưỡng sự tự tin, chủ động và niềm yêu thích trong học tập.",
      ],
    },

    {
      id: 18,
      image: "assets/humans-images/default.jpg",
      name: "Hoàng Thị Thúy Hằng",
      position: "Marketing & PR Leader",
      profile: [
        "Cử nhân chuyên ngành Quan hệ Quốc tế trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc gia Hà Nội",
        "Đạt học bổng 70% trường Đại học KyungDong (Hàn Quốc)",
        "Hoàn thành chương trình trải nghiệm giáo dục và giao lưu văn hóa ngắn hạn tại Trung Quốc và Philippines ",
        "Kinh nghiệm báo chí tại các kênh thông tin giải trí uy tín",
        "Kinh nghiệm tổ chức và điều phối các chương trình trải nghiệm giáo dục trong và ngoài nước",
      ],
      pov: [
        "Giáo dục là lĩnh vực càng làm càng muốn dấn thân. Tôi tin vào sức mạnh chuyển hóa của nó với sự trưởng thành mỗi con người. Tại 2G, triết lý ‘thực làm – thực tạo giá trị’ thôi thúc tôi hành động mỗi ngày, để giá trị thật được tạo ra, không chỉ được nói ra.",
      ],
    },

    {
      id: 19,
      image: "assets/humans-images/LuongThiHanh.jpg",
      name: "Lương Thị Hạnh",
      position: "Giám đốc chi nhánh Sài Gòn",
      profile: [
        "Hơn 10 năm kinh nghiệm trong lĩnh vực Đào tạo và phát triển năng lực đội ngũ và 350h khia vấn trên nền tảng thông minh cảm xúc",
        "Từng đảm nhiệm vị trí Chuyên gia giải pháp, trưởng phòng phát triển năng lực tại học viện quản lý PACE,...",
        "Đồng dịch giả sách 6 Thực hành thiết yếu để quản trị đội ngũ",
        "Diễn giả/cố vấn cho các sự kiện/ dự án do tổ chức sinh viên quốc tế AIESEC triển khai",
      ],
      pov: [
        "Làm việc tại 2G Education giúp tôi cảm nhận rõ tầm quan trọng của văn hoá doanh nghiệp tác động đến sự phát triển của doanh nghiệp như thế nào. Đặc biệt nhờ có 2 giá trị Resilience và Credibility, mỗi thành viên tại 2G Signature Campus giữ được sự kiên định vào mục tiêu làm giáo dục tử tế và từng bước mang tinh thần thực học vào trong từng hoạt động khảo thí và đào tạo ngoại ngữ.",
      ],
    },

    {
      id: 20,
      image: "assets/humans-images/BaoYen.jpg",
      name: "Nguyễn Thị Bảo Yến",
      position: "Brand & PR Communication Leader",
      profile: [
        "Tốt nghiệp loại giỏi trường Đại học Kinh tế Quốc Dân",
        "IELTS 7.5, trong đó Reading 8.5",
        "Là 1 trong 3 người Việt đạt được học bổng trao đổi ngắn hạn Sáng kiến ​​Lãnh đạo Trẻ Đông Nam Á (YSEALI - 2022) của Chính phủ Mỹ",
        "Hơn 3 năm kinh nghiệm trong ngành truyền thông marketing với các thương hiệu lớn như Đại sứ quán Mỹ, Biti’s, Honda, Yamaha…",
      ],
      pov: [
        "Tôi đến với 2G khi mới tích luỹ được chỉ ít năm kinh nghiệm làm truyền thông. Nhưng chính tại đây, tôi mới thật sự có cơ hội phát huy tối đa những gì mình học được – từ chuyên môn branding, kỹ năng ngôn ngữ đến những trải nghiệm quốc tế. Từ lúc ra trường tới hiện tại, 2G là môi trường mà tôi có ấn tượng đặc biệt, bởi đây là nơi những người trẻ như tôi được tin tưởng và trao quyền leadership, được khuyến khích thử nghiệm và theo đuổi những ý tưởng sáng tạo, điều ít thấy so với những tổ chức giáo dục khác. “Lãnh đạo khai phóng” ở 2G không chỉ là một câu nói mà thực sự được chuyển hoá thành hành động.",
        "Điều đặc biệt nữa ở 2G là sự lắng nghe và linh hoạt, khi mỗi người trong team đều có cá tính riêng nhưng không ai bị gò bó, mà được tôn trọng và phát triển, cùng hỗ trợ nhau, học hỏi và cùng tạo ra những điều có ý nghĩa. Tôi chọn gắn bó với 2G vì tin vào triết lý giáo dục tử tế mà tổ chức này theo đuổi – một niềm tin rằng khi ta làm việc bằng sự chân thành và tận tâm, ta có thể góp phần lan toả những giá trị tích cực hơn cho xã hội.",
      ],
    },

    {
      id: 21,
      image: "assets/humans-images/CamTu.jpg",
      name: "Viên Thị Cẩm Tú",
      position: "Trưởng ban MKT trại hè quốc tế Eureka Camps",
      profile: [
        "Sở hữu hơn 6 năm kinh nghiệm làm việc trong ngành MKT, và hơn 5 năm kinh nghiệm trong MKT tuyển sinh tại hệ thống Giáo dục lớn.",
        "Hơn 3 năm Điều phối chương trình, tổ chức sự kiện, các cuộc thi tiếng Anh lớn.",
        "Đã khám phá trải nghiệm các quốc gia như Hàn Quốc, singapore, Thái Lan.",
        "Tốt nghiệp các khóa học chuyên sâu về MKT, Content, Design.",
        "Cựu học sinh lớp chuyên Văn Sử – Trường THPT Chuyên Phan Bội Châu",
      ],
      pov: [
        "Tôi tin rằng giáo dục không chỉ là truyền đạt kiến thức, mà là hành trình khám phá bản thân trong một môi trường truyền cảm hứng. 2G không đơn thuần là nơi học và thi – mà là không gian nơi mỗi học viên được lắng nghe, được thử sức và phát triển đúng theo lộ trình cá nhân. Mọi trải nghiệm tại đây, từ lớp học đến kỳ thi, đều chỉn chu và tạo cảm giác yên tâm. Với tôi, 2G là sự kết hợp hiếm có giữa chuyên môn, sự thấu hiểu và tinh thần đồng hành.",
      ],
    },

    {
      id: 22,
      image: "assets/humans-images/ChiNhan.jpg",
      name: "Nguyễn Thị Nhàn",
      position: "Research and Development",
      profile: [
        "4 năm liền đạt Học bổng Merali - Học bổng dành cho Nữ sinh Châu Á và Học bổng tại trường Khoa học Tự Nhiên.",
        "Tốt nghiệp Cử nhân loại Giỏi trường Đại học Khoa học Tự Nhiên - ĐHQGHN",
        "3 năm là Nghiên cứu viên - công tác tại Viện Địa Lý - Viện Hàn Lâm Khoa học và Công nghệ Việt Nam",
        "Từng đảm nhiệm nhiều vị trí quan trọng tại 2G Education",
        "Chứng chỉ Nghiệp vụ Tư vấn du học 2019",
        "Chứng chỉ Chuyên viên Giáo dục Hướng nghiệp 2024",
      ],
      pov: [
        "Tôi đã đồng hành cùng Trung tâm Tiếng Anh 2G Education suốt 7 năm kể từ những ngày đầu khởi nghiệp. Điều khiến tôi gắn bó lâu dài là niềm tin sâu sắc vào giá trị giáo dục mà 2G mang lại – được minh chứng qua kết quả học tập xuất sắc của học sinh và sự tin tưởng bền vững từ Phụ huynh. Mỗi ngày làm việc tại 2G là một hành trình khám phá, nơi tôi được tự do sáng tạo, chinh phục thử thách và phát huy những tiềm năng chưa được khai phá của bản thân. Chính môi trường ấy đã nuôi dưỡng đam mê và khát vọng cống hiến trong tôi.",
      ],
    },

    {
      id: 23,
      image: "assets/humans-images/TrangQuyen.jpg",
      name: "Phạm Nữ Thu Trang",
      position: "Chuyên viên Tư vấn và phát triển thị trường Du học Đài Loan",
      profile: [
        "Hơn 10 năm kinh nghiệm trong lĩnh vực dịch vụ",
        "Cử nhân Trường Đại học Vinh",
      ],
      pov: [
        "Trước khi gia nhập 2G, tôi biết đây là một trung tâm tiếng Anh nổi tiếng tại Nghệ An, đặc biệt trong lĩnh vực đào tạo IELTS. Tuy nhiên, khi bắt đầu làm việc tại đây, tôi mới thật sự nhận ra rằng 2G không chỉ là một trung tâm ngoại ngữ, mà là một tổ chức giáo dục có tầm nhìn rõ ràng, làm việc bằng sự tử tế và đầy tâm huyết. ",
        " Làm việc ở 2G một thời gian, tôi cảm nhận rõ ràng rằng mỗi cá nhân đều có cơ hội được trao quyền, được sáng tạo, được lắng nghe và phát triển. Tôi cũng đã khám phá được nhiều khía cạnh và khả năng của bản thân mà trước đó không hề biết tới, từ một người hướng nội tôi đã trở thành 1 key member đa di năng hướng ngoại trong team du học Đài. Thời gian tới, mong rằng tôi có thể đóng góp được nhiều hơn cho 2G cũng như cho nền giáo dục địa phương.",
      ],
    },

    {
      id: 24,
      image: "assets/humans-images/HaDuHocDuc.jpg",
      name: "Nguyễn Thị Ngọc Hà",
      position: "Trưởng nhóm tuyển sinh Du học Đức",
      profile: [
        "Kinh nghiệm 3 năm làm việc trong ngành FCMG và 2 năm trong ngành Logistics",
        "Hơn 6 năm kinh nghiệm công tác trong ngành Giáo dục",
        "Giám đốc chi nhánh và Quản lý tuyển sinh tại hệ thống Anh Ngữ 2G Education từ 2022 - 2025 ",
        "Quản lý tuyển sinh chương  trình Du học Đức tại GV Manpower ",
        "Tốt nghiệp các khóa đào tạo kỹ năng Quản lý cấp trung ",
        "Sở hữu chứng chỉ nghiên cứu về Tâm lý học hành vi",
      ],
      pov: [
        "Gắn bó với 2G Education từ năm 2019, bản thân Hà đã có cơ hội được phát triển từ các vị trí nhân viên, lên team leader, quản lý, đồng hành cùng với sự phát triển của công ty. 2G không chỉ tạo môi trường học tập lý tưởng cho học sinh mà còn xây dựng một không gian phát triển tuyệt vời cho đội ngũ nhân sự. Với triết lý giáo dục bền vững, 2G khuyến khích tôi học hỏi, thử thách bản thân qua các dự án đa dạng và phát triển các kỹ năng lãnh đạo. ",
        "Môi trường làm việc thân thiện, cởi mở cùng sự hỗ trợ từ đồng nghiệp và ban lãnh đạo đã giúp tôi khám phá tiềm năng và đóng góp vào sứ mệnh giáo dục. Tự hào là một phần của 2G, tôi tin đây là nơi chắp cánh cho cả học sinh và nhân viên vươn xa hơn nữa.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="instructors_container">
        <h1 className="instructors_header">2G Humans</h1>
        <div className="instructors_showdow_list">
          <FlipCard cards={cards} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default NewInstructors;
