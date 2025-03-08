/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="flex items-center logo mb-4 sm:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3413/3413535.png"
            className="h-8 mr-3"
            alt="subject Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ElectiveHub
          </span>
        </a>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a href="/Contact" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="/privacypolicy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/licensing" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="/Contact" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/TechNodes2-0"
              className="flex items-center hover:underline"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                className="h-6 ml-5 mr-4 md:mr-6"
                alt="GitHub Logo"
              />
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pt-5">
        © {new Date().getFullYear()}{" "}
        <Link to="/" className="hover:underline">
          ElectiveHub™
        </Link>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
  
  );
}
