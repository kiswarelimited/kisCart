"use client";
import React, { useState } from "react";
import { Product } from "@/types/product";

const FacebookIcon = () => (
  <svg
    className="fill-current"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.293-.039-1.296-.126-2.462-.126-2.436 0-4.104 1.487-4.104 4.22v2.355H7.318v3.209h2.75v8.196h3.33Z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="fill-current"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="fill-current"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const PinterestIcon = () => (
  <svg
    className="fill-current"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    className="fill-current"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ShareIcon = () => (
  <svg
    className="fill-current"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);

const ShareProduct = ({ item }: { item: Product }) => {
  const [open, setOpen] = useState(false);

  const url =
    typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(`Check out ${item.title} on KisCart!`);
  const shareUrl = encodeURIComponent(url);

  const socialLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: <FacebookIcon />,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
      icon: <XIcon />,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: <LinkedInIcon />,
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareText}`,
      icon: <PinterestIcon />,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      icon: <WhatsAppIcon />,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error(err);
    }
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        aria-label="button for share product"
        className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue"
      >
        <ShareIcon />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 z-99999 w-full h-screen bg-dark/60 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[340px] rounded-xl bg-white p-6 shadow-1"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="button for close share modal"
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full ease-in duration-150 bg-gray-2 text-dark-5 hover:text-dark hover:bg-gray-3"
            >
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.35711 7.14289L12.5 3L13 3.5L8.85711 7.64289L13 11.7858L12.5 12.2858L8.35711 8.14289L4.21421 12.2858L3.71421 11.7858L7.85711 7.64289L3.71421 3.5L4.21421 3L8.35711 7.14289Z"
                  fill=""
                />
              </svg>
            </button>

            <h3 className="font-medium text-dark text-lg">Share this product</h3>
            <p className="text-custom-sm text-dark-4 line-clamp-1 mt-1 mb-5">
              {item.title}
            </p>

            <div className="grid grid-cols-5 gap-2.5">
              {socialLinks.map((link, key) => (
                <a
                  key={key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`share on ${link.name}`}
                  className="flex items-center justify-center w-11 h-11 rounded-full text-white ease-out duration-200 hover:opacity-80"
                  style={{ backgroundColor: "#276BA2" }}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-center gap-2 font-medium text-custom-sm text-white bg-dark py-3 px-6 rounded-md ease-out duration-200 hover:bg-opacity-90 mt-5"
            >
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33317 4.66667V5.5H2.83317C2.00475 5.5 1.33317 6.17157 1.33317 7V12.8333C1.33317 13.6618 2.00475 14.3333 2.83317 14.3333H8.6665C9.49493 14.3333 10.1665 13.6618 10.1665 12.8333V10.3333H10.9998V12.8333C10.9998 14.122 9.95517 15.1667 8.6665 15.1667H2.83317C1.5445 15.1667 0.499837 14.122 0.499837 12.8333V7C0.499837 5.71133 1.5445 4.66667 2.83317 4.66667H5.33317Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.33317 0.833333H13.1665C14.4552 0.833333 15.4998 1.878 15.4998 3.16667V9C15.4998 10.2887 14.4552 11.3333 13.1665 11.3333H7.33317C6.0445 11.3333 4.99984 10.2887 4.99984 9V3.16667C4.99984 1.878 6.0445 0.833333 7.33317 0.833333ZM6.6665 3.16667C6.6665 2.79848 6.96498 2.5 7.33317 2.5H13.1665C13.5347 2.5 13.8332 2.79848 13.8332 3.16667V9C13.8332 9.36819 13.5347 9.66667 13.1665 9.66667H7.33317C6.96498 9.66667 6.6665 9.36819 6.6665 9V3.16667Z"
                  fill=""
                />
              </svg>
              Copy Link
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareProduct;
