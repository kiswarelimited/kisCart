import React from "react";
import Image from "next/image";

type Comment = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  text: string;
  children?: Comment[];
};

const comments: Comment[] = [
  {
    id: 1,
    name: "Musa Anjum",
    avatar: "/images/users/user-01.jpg",
    date: "Feb 15, 2024 at 12:30 pm",
    text: "Great article! The shipping section cleared up a lot of questions I had about delivery times and packaging requirements.",
    children: [
      {
        id: 2,
        name: "David Smith",
        avatar: "/images/users/user-02.jpg",
        date: "Feb 16, 2024 at 09:15 am",
        text: "Couldn't agree more. I'd love to see a follow-up post about international shipping and customs.",
        children: [
          {
            id: 3,
            name: "Musa Anjum",
            avatar: "/images/users/user-03.jpg",
            date: "Feb 16, 2024 at 11:40 am",
            text: "Thanks David! A customs guide is already in the works.",
          },
        ],
      },
      {
        id: 4,
        name: "Emma Wilson",
        avatar: "/images/users/user-04.jpg",
        date: "Feb 17, 2024 at 04:05 pm",
        text: "Very helpful, especially the tips on tracking packages. Keep up the good work!",
      },
    ],
  },
  {
    id: 5,
    name: "James Brown",
    avatar: "/images/users/user-02.jpg",
    date: "Feb 18, 2024 at 10:20 am",
    text: "This is exactly what I was looking for. The step-by-step breakdown makes it super easy to follow.",
  },
];

const ReplyIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5 2.5L1 7M1 7L5.5 11.5M1 7H10.5C12.9853 7 15 9.01472 15 11.5V13.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LikeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4 5.1C14.4 2.85 12.4 1.1 10.05 1.1C9.05 1.1 8.15 1.5 7.5 2.2C6.85 1.5 5.95 1.1 4.95 1.1C2.6 1.1 0.6 2.85 0.6 5.1C0.6 9.4 6.25 13.6 7.35 14.45C7.5 14.55 7.6 14.55 7.5 14.45C8.6 13.6 14.4 9.4 14.4 5.1Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShareIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 3.5L12 1M12 1L15 4M12 1V9M1 5.5C1 4.94772 1.44772 4.5 2 4.5H4V11.5H2C1.44772 11.5 1 11.0523 1 10.5V5.5ZM9 12H10C10.5523 12 11 12.4477 11 13V14C11 14.5523 10.5523 15 10 15H6C5.44772 15 5 14.5523 5 14V13C5 12.4477 5.44772 12 6 12H7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="9"
    height="18"
    viewBox="0 0 9 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z"
      fill="currentColor"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5524 2.26027L16.625 1.0274C16.9355 0.693493 17.0202 0.436644 17.0484 0.308219C16.2016 0.770548 15.4113 0.924658 14.9032 0.924658H14.7056L14.5927 0.821918C13.9153 0.282534 13.0685 0 12.1653 0C10.1895 0 8.6371 1.48973 8.6371 3.21062C8.6371 3.31336 8.6371 3.46747 8.66532 3.57021L8.75 4.0839L8.15726 4.05822C4.54435 3.95548 1.58065 1.13014 1.10081 0.642123C0.310484 1.92637 0.762097 3.15925 1.24194 3.92979L2.20161 5.36815L0.677419 4.5976C0.705645 5.67637 1.15726 6.52397 2.03226 7.14041L2.79435 7.65411L2.03226 7.93665C2.5121 9.24658 3.58468 9.78596 4.375 9.99144L5.41935 10.2483L4.43145 10.8647C2.85081 11.8921 0.875 11.8151 0 11.738C1.77823 12.8682 3.89516 13.125 5.3629 13.125C6.46371 13.125 7.28226 13.0223 7.47984 12.9452C15.3831 11.25 15.75 4.82877 15.75 3.54452V3.36473L15.9194 3.26199C16.879 2.44007 17.2742 2.00342 17.5 1.74658C17.4153 1.77226 17.3024 1.82363 17.1895 1.84932L15.5524 2.26027Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z"
      fill="currentColor"
    />
  </svg>
);

const CopyLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 9.5L9.5 6.5M11 5.5L12.5 4C13.0523 3.44772 13.9477 3.44772 14.5 4C15.0523 4.55228 15.0523 5.44772 14.5 6L12 8.5C11.4477 9.05228 10.5523 9.05228 10 8.5M5 10.5L3.5 12C2.94772 12.5523 2.05228 12.5523 1.5 12C0.947715 11.4477 0.947715 10.5523 1.5 10L4 7.5C4.55228 6.94771 5.44772 6.94771 6 7.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ActionButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button
    type="button"
    className="inline-flex items-center gap-1.5 text-custom-xs text-dark-4 ease-out duration-200 hover:text-blue"
  >
    {icon}
    {label}
  </button>
);

const CommentItem = ({
  comment,
  isReply = false,
}: {
  comment: Comment;
  isReply?: boolean;
}) => {
  return (
    <div>
      <div className="flex items-start gap-4">
        <div className="flex w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-3/60">
          <Image
            src={comment.avatar}
            alt={comment.name}
            width={44}
            height={44}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-between">
            <div>
              <h4 className="font-medium text-dark text-custom-sm">
                {comment.name}
                {isReply && (
                  <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-white bg-blue rounded-[30px] px-2 py-0.5 align-middle">
                    Reply
                  </span>
                )}
              </h4>
              <p className="text-custom-xs text-dark-4 mt-1">{comment.date}</p>
            </div>

            <div className="flex items-center gap-4">
              <ActionButton icon={<ReplyIcon />} label="Reply" />
              <ActionButton icon={<LikeIcon />} label="Like" />
              <button
                type="button"
                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-2 text-dark-4 ease-out duration-200 hover:bg-blue hover:text-white"
                aria-label={`Share ${comment.name}'s comment`}
              >
                <ShareIcon />
              </button>
            </div>
          </div>

          <p className="leading-relaxed mt-3">{comment.text}</p>
        </div>
      </div>

      {comment.children && comment.children.length > 0 && (
        <div className="mt-6 ml-[18px] sm:ml-14 border-l-2 border-gray-3 pl-5 sm:pl-8 space-y-6">
          {comment.children.map((child) => (
            <CommentItem key={child.id} comment={child} isReply />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentForm = () => {
  const inputClasses =
    "w-full rounded-md border border-gray-3 bg-white placeholder:text-dark-4 py-3 px-5 outline-none duration-200 focus:border-transparent focus:ring-2 focus:ring-blue/30";

  return (
    <form className="bg-white shadow-1 rounded-xl p-4 sm:p-8">
      <h3 className="font-medium text-dark text-lg xl:text-xl mb-1">
        Leave a Reply
      </h3>
      <p className="text-custom-xs text-dark-4 mb-6">
        Your email address will not be published. Required fields are marked *
      </p>

      <div className="flex flex-col sm:flex-row gap-5 mb-5">
        <div className="w-full">
          <label htmlFor="commentName" className="block mb-2.5 text-custom-sm">
            Name <span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="commentName"
            id="commentName"
            placeholder="Enter your name"
            className={inputClasses}
          />
        </div>

        <div className="w-full">
          <label htmlFor="commentEmail" className="block mb-2.5 text-custom-sm">
            Email <span className="text-red">*</span>
          </label>
          <input
            type="email"
            name="commentEmail"
            id="commentEmail"
            placeholder="Enter your email"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="commentMessage" className="block mb-2.5 text-custom-sm">
          Comment <span className="text-red">*</span>
        </label>
        <textarea
          name="commentMessage"
          id="commentMessage"
          rows={5}
          placeholder="Write your comment here..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
      >
        Post Comment
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 1.5L7.5 8.5M14.5 1.5L9.75 14.5L7.5 8.5L1 6.25L14.5 1.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};

const Comments = () => {
  return (
    <div className="mt-12">
      {/* <!-- comments header --> */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-7.5">
        <h3 className="font-medium text-dark text-xl xl:text-custom-2xl">
          Comments{" "}
          <span className="text-blue font-semibold">
            ({comments.length + comments.reduce((acc, c) => acc + (c.children?.length ?? 0), 0)})
          </span>
        </h3>

        <a
          href="#"
          className="inline-flex items-center gap-2 font-medium text-dark bg-white shadow-1 rounded-md py-2.5 px-5 ease-out duration-200 hover:text-white hover:bg-blue"
        >
          <ShareIcon />
          Share
        </a>
      </div>

      {/* <!-- share icons --> */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="text-custom-sm text-dark-4">Share this post :</span>

        <a
          href="#"
          aria-label="Share on Facebook"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1877F2] text-white ease-in duration-200 hover:opacity-85"
        >
          <FacebookIcon />
        </a>

        <a
          href="#"
          aria-label="Share on Twitter"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00ACEE] text-white ease-in duration-200 hover:opacity-85"
        >
          <TwitterIcon />
        </a>

        <a
          href="#"
          aria-label="Share on LinkedIn"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0376A8] text-white ease-in duration-200 hover:opacity-85"
        >
          <LinkedinIcon />
        </a>

        <button
          type="button"
          aria-label="Copy link"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-3 text-dark ease-in duration-200 hover:bg-blue hover:text-white"
        >
          <CopyLinkIcon />
        </button>
      </div>

      {/* <!-- comments list --> */}
      <div className="space-y-6 mb-10">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white shadow-1 rounded-xl p-4 sm:p-7">
            <CommentItem comment={comment} />
          </div>
        ))}
      </div>

      {/* <!-- reply form --> */}
      <CommentForm />
    </div>
  );
};

export default Comments;
