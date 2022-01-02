/* eslint-disable */
import React, { useEffect, useState } from "react";

export default function ImageAndVideo({ item, info, setAppear, setInfo }) {
  const [time, setTime] = useState("");
  function fmtMSS(s) {
    const time = (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    return time;
  }
  useEffect(() => {
    if (item.type === "video") {
      const AllVideo = document.getElementsByClassName("video");
      const index = [...AllVideo].findIndex(
        (video) => video.childNodes[0].src === item.url
      );
      AllVideo[index].onloadedmetadata = function () {
        console.log(this.duration); //this refers to myVideo
        setTime(fmtMSS(Math.ceil(this.duration)));
      };
    }
  }, []);

  return (
    <>
      {item.type === "image" ? (
        <img
          src={item.url}
          alt={item.url}
          style={
            info.url !== item.url
              ? { cursor: "zoom-in", borderColor: "transparent" }
              : { cursor: "zoom-out", borderColor: "#ee4d2d" }
          }
          onClick={() => {
            if (info.url === item.url) {
              setAppear(false);
              setInfo({ type: "image", url: "" });
            } else {
              setAppear(true);
              setInfo({ type: "image", url: item.url });
            }
          }}
        />
      ) : (
        <div
          className="video-wrapper"
          onClick={() => {
            if (info.url === item.url) {
              setAppear(false);
              setInfo({ type: "video", url: "" });
            } else {
              setAppear(true);
              setInfo({ type: "video", url: item.url });
            }
          }}
        >
          <video
            className="video"
            style={
              info.url !== item.url
                ? { cursor: "zoom-in", borderColor: "transparent" }
                : { cursor: "zoom-out", borderColor: "#ee4d2d" }
            }
          >
            <source src={item.url} alt={item.url} />
          </video>
          <div className="video-icon-time">
            <svg width="23" height="18" viewBox="0 0 23 18" fill="none">
              <g filter="url(#filter0_d)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="22.1667"
                  height="18"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <span className="time-video">{time && time}</span>
          </div>
        </div>
      )}
    </>
  );
}
