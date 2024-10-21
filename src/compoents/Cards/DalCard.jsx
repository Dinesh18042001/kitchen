import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function DalCard() {
  return (
    <>
      <div className="dal-card-section mt-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">

              <div className="custom-card">
                <div className="card-header position-relative">
                  <img
                    src="/card/dal.jpg"
                    alt="Card Image"
                    className="card-img-top"
                  />
                   <div className="like-icon">
                   <FontAwesomeIcon icon={faHeart} />
                   </div>
                </div>
                <div className="card-body">
                  <div className="card-tittle d-flex align-items-center justify-content-between mb-3">
                    <h5>Dal Roti</h5>
                    <div className="card-save-btn">
                      <a href="#">
                        4.5 <FontAwesomeIcon icon={faStar} />
                      </a>
                    </div>
                  </div>

                  <p className="card-text">
                    This is a short description for the custom card content. You
                    can customize it as needed.
                  </p>

                  <div className="save-btn text-start">
                    <a href="#">
                      <FontAwesomeIcon icon={faBookmark} /> Save
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
