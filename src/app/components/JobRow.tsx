import React from "react";
import {faHeart} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute top-2 right-4">
            <FontAwesomeIcon className="size-4" icon={faHeart}/>
        </div>
        <div className="flex gap-4">
          <div className="content-end">
            <img
              className="size-12"
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
            <div className="text-gray-500 text-sm">Spotify</div>
            <div className="font-bold mb-1 text-lg">Product designer</div>
            <div className="text-gray-500 text-sm">
              Remote &middot; New York, US &middot; Full-time
            </div>
            </div>
          </div>
          <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
        </div>
      </div>
    </>
  );
}
