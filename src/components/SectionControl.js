/* eslint-disable */
import React from "react";
import $ from "jquery";
export default function SectionControl() {
  return (
    <div>
      <section class="main-bottom-flex justify-end btn-top">
        <div class="btn-back-top">
          <button
            class="carousel-averge-size"
            onClick={() => {
              $("html, body").animate({ scrollTop: 0 }, "fast");
            }}
          >
            Back to top
          </button>
        </div>
      </section>
    </div>
  );
}
