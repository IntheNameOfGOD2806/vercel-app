import { useEffect, useState } from "react";

import "./App.scss";
import ImgMediaCard from "./components/course/Course.Card";
const initValues: ICourse[] = [
  {
    ImgURL: "https://picsum.photos/200/300",
    Title: "Giới thiệu về JavaScript",
    Description: "Học các khái niệm cơ bản của ngôn ngữ lập trình JavaScript.",
    ViewCount: 1200,
    PublishedDate: "2023-05-10",
  },
  {
    ImgURL: "https://picsum.photos/200/300",
    Title: "Phát triển Web Nâng cao",
    Description:
      "Thống thạo các khái niệm nâng cao trong phát triển web bao gồm các framework và thư viện.",
    ViewCount: 2200,
    PublishedDate: "2023-07-20",
  },
  {
    ImgURL: "https://picsum.photos/200/300",
    Title: "Nền tảng Cơ bản của Khoa học Dữ liệu",
    Description: "Khám phá các nền tảng của khoa học dữ liệu và phân tích.",
    ViewCount: 1800,
    PublishedDate: "2023-09-15",
  },
  {
    ImgURL: "https://picsum.photos/200/300",
    Title: "Những Bước Cơ bản của Trí tuệ Nhân tạo",
    Description:
      "Khám phá những khái niệm cơ bản của trí tuệ nhân tạo và học máy.",
    ViewCount: 3000,
    PublishedDate: "2023-11-02",
  },
  {
    ImgURL: "https://picsum.photos/200/300",
    Title: "Phát triển Ứng dụng Di động với React Native",
    Description:
      "Xây dựng ứng dụng di động đa nền tảng sử dụng framework React Native.",
    ViewCount: 2500,
    PublishedDate: "2024-01-20",
  },
  {
    ImgURL: "https://picsum.photos/200/300",
    Title: "Phát triển Ứng dụng Di động với React Native",
    Description:
      "Xây dựng ứng dụng di động đa nền tảng sử dụng framework React Native.",
    ViewCount: 2500,
    PublishedDate: "2024-01-20",
  },
  {
    ImgURL: "https://picsum.photos/200/300",
    Title: "Phát triển Ứng dụng Di động với React Native",
    Description:
      "Xây dựng ứng dụng di động đa nền tảng sử dụng framework React Native.",
    ViewCount: 2500,
    PublishedDate: "2024-01-20",
  },
  {
    ImgURL: "https://picsum.photos/200/300",
    Title: "Phát triển Ứng dụng Di động với React Native",
    Description:
      "Xây dựng ứng dụng di động đa nền tảng sử dụng framework React Native.",
    ViewCount: 2500,
    PublishedDate: "2024-01-20",
  },
];

function App() {
  
  const [courses, setCourses] = useState<ICourse[]>([]);
  useEffect(() => {
    setCourses(initValues);
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="global-wrapper">
          <div className="content-left">
            {courses.map((course,index) => (
              <ImgMediaCard key={index} course={course} />
            ))}
          </div>
          <div className="content-right"></div>
        </div>
      </div>
    </>
  );
}

export default App;
