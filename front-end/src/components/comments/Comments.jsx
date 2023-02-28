import React from "react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import "./comments.css";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Comments = () => {
  const options = {
    speed: 500,
    max: 20,
  };
  return (
    <div className="comments-container bg-slate-700 p-4 mb-6 rounded-lg">
      <div className="comment-header flex mb-4">
        <div className="newest-comments border-solid border border-pink-600 py-1.5 px-3 text-md font-medium text-pink-600 rounded-lg hover:bg-white hover:text-pink-600 cursor-pointer mr-6">
          Newest Comments
        </div>
        <div className="newest-comments border-solid border border-white py-1.5 px-3 text-md font-medium text-white rounded-lg hover:bg-pink-600 hover:text-white cursor-pointer">
          Top Comments
        </div>
      </div>
      <div className="comment-content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <Tilt options={options}>
          <div className="dwl-item text-white p-4 rounded-lg bg-slate-500">
            <div className="flex mb-3">
              <div className="mostpopular-img mr-3">
                <div className="rounded-md w-14 h-14">
                  <img
                    src="/assets/avatar/card-item-2.jpg"
                    className="object-cover rounded-md w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="comment-writer mb-3-name mb-1">
                <div class="comment-time text-white font-semibold">
                  Zakaria zejly
                </div>
                <div className="text-gray-200">
                  <div className="">- 14:35 Fev 2023</div>
                </div>
              </div>
            </div>
            <div className="text-cut">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              voluptatem.
            </div>
            <div className="on-chapt">
              <div className="p-1 bg-slate-700 rounded-md text-white">
                <div className="flex items-center mr-4">
                  <div className="mr-2 text-gray-300 mt-0.5">
                    <i class="bx bxs-file text-pink-600"></i>
                  </div>
                  <div className="">My Hero Academy</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt options={options}>
          <div className="dwl-item text-white p-4 rounded-lg bg-slate-500">
            <div className="flex mb-3">
              <div className="mostpopular-img mr-3 ">
                <div className="rounded-md w-14 h-14">
                  <img
                    src="/assets/avatar/card-item-7.jpg"
                    className="object-cover rounded-md w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="comment-writer mb-3-name mb-1">
                <div class="comment-time text-white font-semibold">
                  Zakaria zejly
                </div>
                <div className="text-gray-200">
                  <div className="">- 14:35 Fev 2023</div>
                </div>
              </div>
            </div>
            <div className="text-cut ">
              Lorem ipsum, dolor sit amet consecte tur adipisicing elit.
            </div>
            <div className="on-chapt">
              <div className="p-1 bg-slate-700 rounded-md text-white">
                <div className="flex items-center mr-4">
                  <div className="mr-2 text-gray-300 mt-0.5">
                    <i class="bx bxs-file text-pink-600"></i>
                  </div>
                  <div className="">My Hero Academy</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt options={options}>
          <div className="dwl-item text-white p-4 rounded-lg bg-slate-500">
            <div className="flex mb-3">
              <div className="mostpopular-img mr-3 ">
                <div className="rounded-md w-14 h-14">
                  <img
                    src="/assets/avatar/card-item-3.jpg"
                    className="object-cover rounded-md w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="comment-writer mb-3-name mb-1">
                <div class="comment-time text-white font-semibold">
                  Zakaria zejly
                </div>
                <div className="text-gray-200">
                  <div className="">- 14:35 Fev 2023</div>
                </div>
              </div>
            </div>
            <div className="text-cut ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              laudantium commodi totam sit repellat minima sequi, provident
              velit asperiores necessitatibus?
            </div>
            <div className="on-chapt">
              <div className="p-1 bg-slate-700 rounded-md text-white">
                <div className="flex items-center mr-4">
                  <div className="mr-2 text-gray-300 mt-0.5">
                    <i class="bx bxs-file text-pink-600"></i>
                  </div>
                  <div className="">My Hero Academy</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Comments;
