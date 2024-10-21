import React from "react";
import { TbSearch } from "react-icons/tb"; 

export default function Banner() {
  return (
    <>
      <div className="banner-section position-relative">
        <div className="banner-img">
          <img src="/avatars/banner3.jpg" alt="Banner" className="w-100" />
        </div>

        <div className="container">
          <div className="banner-info">
            <div className="banner-info-title text-center mb-4">
              <h2>Lunch and breakfast in Delhi NCR</h2>
            </div>

            <div className="d-flex justify-content-center">
              <div className="search-input input-group">
                <span className="input-group-text d-flex align-items-center"> 
                  <TbSearch className="search-icon" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for restaurant, cuisine or a dish"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
