import React, { Suspense } from "react";
import Navbar from "../../componenets/Navbar/Navbar";
import Fireflies from "../../componenets/Fireflies/Fireflies";
import "./Founder_words.css";
import Footer from "../../componenets/Footer/Footer";
function Founder_words() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div className="letter_container">
        <div className="letter_card">
            <div className="letter_founder_info">
          <img
            src="assets/humans-images/founder.jpg"
            alt=""
          />
          <div className="letter_founder_history">
          <div className="letter_founder_name">
                <h2>Lê Văn Hải</h2>
              </div>
              <div className="letter_founder_details">
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
          </div>
          </div>
          <div className="letter_info">
            <div className="letter_name">
              <h2>Thư ngỏ</h2>
            </div>
            <div className="letter_detail">
              <p>
                <b>
                  Kính gửi: Quý Cơ Quan Ban Ngành, Quý Đối Tác, Quý Phụ Huynh
                </b>
              </p>
              <br />
              <p>
                Là một người con sinh ra tại vùng quê Nam Đàn, Nghệ An, tôi may
                mắn được nuôi dưỡng trong một môi trường giàu truyền thống hiếu
                học nhưng cũng đầy những giới hạn của hoàn cảnh. Ngay từ nhỏ,
                tôi đã cùng mẹ buôn bán ở chợ quê, làm nông cùng gia đình, và
                trải qua những ngày tháng không ngừng nỗ lực vươn lên để tìm
                kiếm những cơ hội học tập tốt hơn. Tôi là một trong những học
                sinh nhận học bổng từ các tập đoàn và tổ chức lớn như Vinamilk,
                Tổng Công Ty Giao Thông Cienco 4, cùng nhiều đơn vị khác – những
                cánh cửa quý giá đã giúp tôi nhận ra sức mạnh của giáo dục trong
                việc thay đổi cuộc đời.
              </p>

              <p>
                Với khát khao mạnh mẽ thoát khỏi giới hạn của hoàn cảnh và không
                ngừng phát triển bản thân, tôi đã từng bước tự thiết kế hành
                trình học tập của mình. Sau khi tốt nghiệp từ THPT Chuyên Phan
                Bội Châu, tôi bắt đầu hành trình trải nghiệm giáo dục toàn cầu.
                Từ chương trình World Youth Congress tại Mỹ, đến khóa học Khởi
                Nghiệp Sáng Tạo tại Hà Lan, cùng những trải nghiệm ở hơn 32 quốc
                gia tôi đã đặt chân tới, tôi đã chứng kiến rõ nét sự khác biệt
                trong cách giáo dục được tiếp cận ở các nền kinh tế tiên tiến và
                tại quê hương mình.
              </p>
              <br />
              <p>
                Nhận thấy khoảng cách này, tôi mang trong mình một khát vọng
                lớn: Làm thế nào để giúp thế hệ trẻ Việt Nam có thể tiếp cận nền
                giáo dục tốt nhất, trang bị những năng lực vượt trội để vươn ra
                thế giới?
              </p>

              <p>2G Education ra đời từ chính khát vọng ấy.</p>

              <p>
                Chúng tôi tin rằng, trong kỷ nguyên hội nhập, giáo dục không chỉ
                đơn thuần là tiếp thu kiến thức mà còn là sự chuẩn bị toàn diện
                về ngoại ngữ, tư duy, kỹ năng, công nghệ và năng lực tự nhận
                thức. Những yếu tố này chính là chìa khóa giúp mỗi cá nhân rút
                ngắn khoảng cách với thế giới, tự tin khẳng định bản thân trong
                một xã hội không biên giới.
              </p>
              <br />
              <p>
                Với lý tưởng “Transform lives through the power of education” –
                Biến đổi cuộc sống qua sức mạnh giáo dục, chúng tôi cam kết:
              </p>

              <ul>
                <li>
                  Xây dựng một hệ sinh thái giáo dục bền vững, nơi mỗi học sinh
                  đều có thể tiếp cận những phương pháp giảng dạy tiên tiến,
                  phát triển tư duy và nâng cao khả năng hội nhập toàn cầu.
                </li>

                <li>
                  Kết nối với các trường đại học, tổ chức giáo dục, và doanh
                  nghiệp trên thế giới để mở ra những cơ hội học tập và làm việc
                  tốt nhất cho học viên Việt Nam.
                </li>

                <li>
                  Ứng dụng công nghệ vào giảng dạy, giúp học sinh phát triển cả
                  về kiến thức lẫn kỹ năng thực tiễn để trở thành công dân toàn
                  cầu.
                </li>
              </ul>
              <br />
              <p>
                Nhận thức được tầm quan trọng của việc mở rộng kết nối quốc tế,
                sau khi tôi tốt nghiệp cử nhân Luật, tôi đã lựa chọn trở thành
                một trong những doanh nhân trẻ sở hữu song tịch thông qua đầu
                tư, nhằm tối ưu hóa khả năng tự do di chuyển, xây dựng cầu nối
                hợp tác giáo dục giữa Việt Nam và thế giới.
              </p>

              <p>
                Hôm nay, tôi gửi thư này đến quý cơ quan, quý đối tác và quý phụ
                huynh với mong muốn được kết nối, hợp tác và cùng nhau tạo dựng
                một môi trường giáo dục tiên tiến, thực tiễn và bền vững – nơi
                mỗi học sinh đều có cơ hội phát triển toàn diện và tự tin bước
                ra thế giới.
              </p>

              <p>
                Chúng tôi tin rằng, khi được trang bị nền tảng giáo dục vững
                chắc, thế hệ trẻ không chỉ mở rộng cánh cửa cho chính mình mà
                còn góp phần xây dựng một xã hội tri thức, thúc đẩy sự phát
                triển chung của đất nước.
              </p>
              <br />

              
              <div className="signature">
              <p>Trân trọng,</p>
                <p>Lê Văn Hải</p>

                <p>Nhà sáng lập 2G Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}

export default Founder_words;
