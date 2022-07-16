import React from "react";
import { blogData } from "../../data";
import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <>
      <section class="our-blog-section pt-100 gray-light-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="section-heading mb-5">
                <h2>Our Latest News</h2>
                <p>
                  Enthusiastically drive revolutionary opportunities before
                  emerging leadership. Distinctively transform tactical methods
                  of empowerment via resource sucking core.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            {blogData.map((data) => (
              <div class="col-md-4">
                <div class="single-blog-card card border-0 shadow-sm">
                  <span class="category position-absolute badge badge-pill badge-primary">
                    {data.category}
                  </span>
                  <img
                    src={data.thumbnail}
                    class="card-img-top position-relative"
                    alt="blog"
                  />
                  <div class="card-body">
                    <div class="post-meta mb-2">
                      <ul class="list-inline meta-list">
                        <li class="list-inline-item">{data.date}</li>
                        <li class="list-inline-item">
                          <span>{data.comments}</span> Comments
                        </li>
                        <li class="list-inline-item">
                          <span>{data.share}</span> Share
                        </li>
                      </ul>
                    </div>
                    <h3 class="h5 card-title">
                      <Link to="/blog-details">{data.title}</Link>
                    </h3>
                    <p class="card-text">{data.excerpt} </p>
                    <Link to="/blog-details" class="detail-link">
                      Read more <span class="ti-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
