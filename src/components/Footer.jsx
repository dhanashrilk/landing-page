import React from "react";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#334155] text-center lg:text-left">
      <div className="container p-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-6">
          {/* <!--First links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">
              Categories
            </h5>

            <ul className="mb-0 list-none">
              <li className="py-2">
                <a className="text-white">User Interface</a>
              </li>
              <li className="py-2">
                <a className="text-white">User Experience</a>
              </li>
              <li className="py-2">
                <a className="text-white">Digital Media</a>
              </li>
              <li className="py-2">
                <a className="text-white">Lifestyle</a>
              </li>
            </ul>
          </div>

          {/* <!--Second links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Product</h5>

            <ul className="mb-0 list-none">
              <li className="py-2">
                <a className="text-white">Pricing</a>
              </li>
              <li className="py-2">
                <a className="text-white">Overview</a>
              </li>
              <li className="py-2">
                <a className="text-white">Browse</a>
              </li>
              <li className="py-2">
                <a className="text-white">Accessibility</a>
              </li>
            </ul>
          </div>

          {/* <!--Third links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Solutions</h5>

            <ul className="mb-0 list-none">
              <li className="py-2">
                <a className="text-white">Brainstorming</a>
              </li>
              <li className="py-2">
                <a className="text-white">Ideation</a>
              </li>
              <li className="py-2">
                <a className="text-white">Wireframing</a>
              </li>
              <li className="py-2">
                <a className="text-white">Research</a>
              </li>
            </ul>
          </div>

          {/* <!--Fourth links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Resources</h5>

            <ul className="mb-0 list-none">
              <li className="py-2">
                <a className="text-white">Help Center</a>
              </li>
              <li className="py-2">
                <a className="text-white">Blog</a>
              </li>
              <li className="py-2">
                <a className="text-white">Tutorials</a>
              </li>
              <li className="py-2">
                <a className="text-white">FAQs</a>
              </li>
            </ul>
          </div>

          {/* <!--Fifth links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Support</h5>

            <ul className="mb-0 list-none">
              <li className="py-2">
                <a className="text-white">Contact Us</a>
              </li>
              <li className="py-2">
                <a className="text-white">Developers</a>
              </li>
              <li className="py-2">
                <a className="text-white">Documentation</a>
              </li>
              <li className="py-2">
                <a className="text-white">Integrations</a>
              </li>
            </ul>
          </div>
          {/* <!--Sixth links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-white">Company</h5>

            <ul className="mb-0 list-none">
              <li className="py-2">
                <a className="text-white">About</a>
              </li>
              <li className="py-2">
                <a className="text-white">Press</a>
              </li>
              <li className="py-2">
                <a className="text-white">Events</a>
              </li>
              <li className="py-2">
                <a className="text-white flex">
                  Request Demo <FaArrowRight className="mt-1 ml-2" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg- p-4 text-center text-white flex justify-between">
        <div className="flex">
          <p className="mx-2">Trakor @ 2023</p>
          <p className="mx-2">Terms of Service</p>
          <p className="mx-2">Privacy Policy</p>
          <p className="mx-2">Manage Cookies</p>
        </div>
        <div className="flex">
          <p className="mx-2 text-base">
            <FaYoutube />
          </p>
          <p className="mx-2 text-base">
            <FaFacebookF />
          </p>
          <p className="mx-2 text-base">
            <FaTwitter />
          </p>
          <p className="mx-2 text-base">
            <FaInstagram />
          </p>
          <p className="mx-2 text-lg">
            <FaLinkedin />
          </p>
          <div className="mt-[-15px]">
            <img src="./img/appstore.png" alt="" className="mx-2 h-12" />
          </div>
          <div className="mt-[-15px]">
            {" "}
            <img src="./img/playstore.png" alt="" className="mx-2 h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
