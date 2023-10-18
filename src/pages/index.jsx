import React from "react";
import AlbumList from "../components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc hot hiện nay",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/7/2/e/a72e63b7602ab3fd88404c6717920e38.jpg",
    },
    {
      id: 2,
      name: "Nhạc US-UK",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/e/8/c/9e8c67c23bace04d5e0e99b850ced883.jpg",
    },
    {
      id: 3,
      name: "Nhạc xứ Phù tang",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/0/e/9/00e936d9ebff9dafbd1c76da49ac7f9e.jpg",
    },
    {
      id: 4,
      name: "Nhạc cách mạng",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/d/1/e/7d1eaaea957e086487b5738503f44aa3.jpg",
    },
    {
      id: 5,
      name: "nhac viet hay",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/0/4540d9a9c610cbc505cacc66d6aadff5.jpg",
    },
    {
      id: 6,
      name: "nhac viet tre hay",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/9/f/e/59fe053ec38b5b51b5bc1664e9f36221.jpg",
    },
  ];
  return (
    <div>
      <h2>&nbsp; Có thể bạn thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
