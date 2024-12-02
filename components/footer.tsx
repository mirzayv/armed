import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-x-8 gap-y-24">
          <Link
            href="/"
            className="xl:col-span-1 text-black inline-flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="48"
              viewBox="0 0 170 48"
              fill="none"
              className="h-8 fill-gray-400"
            >
              <g clipPath="url(#clip0_232_27072)">
                <path d="M47.7311 0H46.5488V48H47.7311V0Z" fill="#000D68" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M61.8242 8.12329L52.584 28.8885H57.4942L59.3365 24.4569H68.9974L70.8396 28.8885C70.8396 28.8885 75.8732 28.8957 75.8732 28.8885C75.8732 28.8812 66.5894 8.12329 66.5894 8.12329H61.8242ZM64.1742 12.8595C64.1814 12.8595 67.4598 20.7797 67.4598 20.7869C67.4598 20.7942 60.8959 20.7869 60.8959 20.7869C60.8959 20.7869 64.1669 12.8595 64.1742 12.8595Z"
                  fill="#5FC6FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M92.6049 21.8242C92.7863 21.7226 93.2287 21.4325 93.4535 21.2657C94.2441 20.6637 94.9186 19.8514 95.3538 18.9738C95.4263 18.8287 95.4916 18.6836 95.4989 18.6691C95.5061 18.6474 95.5424 18.5603 95.5786 18.4806C95.6149 18.4008 95.6584 18.2702 95.6802 18.1977C95.76 17.9438 95.818 17.7698 95.8325 17.6755C95.847 17.6247 95.8688 17.5232 95.8833 17.4506C95.905 17.3781 95.9195 17.2693 95.934 17.204C95.9921 16.8559 96.0066 16.7471 96.0211 16.6093C96.0283 16.5295 96.0428 16.4062 96.0501 16.3337C96.0718 16.1306 96.0718 15.1442 96.0428 14.8903C96.0066 14.4987 95.9485 14.107 95.905 13.933C95.847 13.6936 95.8252 13.5993 95.818 13.5631C95.8107 13.5413 95.7962 13.4833 95.789 13.447C95.7745 13.4107 95.7382 13.2874 95.7019 13.1787C95.6512 13.0046 95.5134 12.6492 95.4553 12.5186C95.0637 11.6628 94.5342 10.9375 93.8307 10.3065C93.6421 10.1324 93.5478 10.0599 93.2795 9.8568C93.1199 9.74076 92.6267 9.41437 92.5977 9.41437C92.5977 9.41437 92.5542 9.39262 92.5034 9.3636C92.3873 9.29107 91.8579 9.02997 91.7346 8.9792C91.6838 8.95744 91.6185 8.93568 91.5968 8.92843C91.575 8.92117 91.5097 8.89216 91.4517 8.8704C91.3937 8.84864 91.3357 8.82689 91.3212 8.81963C91.2631 8.79062 90.7989 8.63106 90.6902 8.6093C90.6539 8.60204 90.5596 8.57303 90.4943 8.55127C90.1752 8.46424 90.0519 8.43523 89.8851 8.40621C89.8561 8.39896 89.7763 8.38446 89.711 8.36995C89.5659 8.34094 89.3991 8.31193 89.0147 8.2539C88.8261 8.22489 88.42 8.18137 88.0428 8.15236C87.789 8.1306 78.0483 8.14511 78.0483 8.15236C78.041 8.15961 78.041 28.903 78.041 28.903H82.8642C82.8642 28.903 82.8497 23.1369 82.8642 23.1224C82.8787 23.1079 87.274 23.1224 87.274 23.1224C87.274 23.1224 91.2776 28.8958 91.2849 28.903C91.3067 28.9175 96.4417 28.9175 96.4417 28.903C96.4417 28.8958 91.8144 22.2376 91.8144 22.2376C91.8144 22.2376 91.9159 22.1796 92.1625 22.0563L92.6049 21.8242ZM87.274 12.0472C87.6729 12.0762 87.7745 12.0835 88.1516 12.1487C88.2532 12.1632 88.4417 12.2068 88.6158 12.2503C88.7028 12.272 89.0873 12.3953 89.1525 12.4243C89.5152 12.5839 89.6457 12.6564 89.9213 12.8523C90.2115 13.0554 90.4653 13.3237 90.6684 13.6211C90.7772 13.7879 90.9222 14.0635 90.9658 14.2013C90.9803 14.2448 90.9948 14.2956 91.002 14.3101C91.031 14.3681 91.0818 14.5422 91.0963 14.6147C91.1036 14.6583 91.1181 14.7163 91.1253 14.7453C91.1616 14.9121 91.1906 15.1152 91.2051 15.3545C91.2196 15.5794 91.2124 16.0073 91.1906 16.1669C91.1834 16.2176 91.1761 16.3047 91.1688 16.3554C91.1616 16.4135 91.1471 16.4787 91.1398 16.5078C91.1326 16.5368 91.1108 16.6238 91.0963 16.7036C91.0673 16.8341 91.0383 16.9212 91.0093 16.9865C91.002 17.001 90.9875 17.0517 90.973 17.0952C90.9295 17.233 90.7917 17.5014 90.6756 17.6755C90.4943 17.9583 90.2042 18.263 89.9141 18.4733C89.798 18.5531 89.5079 18.7344 89.4064 18.7852C89.2468 18.8577 89.1018 18.923 88.9422 18.9738C88.8624 19.0028 88.7899 19.0245 88.7754 19.0318C88.7319 19.0463 88.3329 19.1478 88.2024 19.1696C87.4698 19.2929 82.8787 19.2856 82.8787 19.2856V15.6737C82.8787 12.787 82.8642 12.0544 82.8787 12.0472C82.9005 12.0182 87.0202 12.0327 87.274 12.0472Z"
                  fill="#5FC6FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.4269 0.0870138C30.4197 0.10152 27.2429 5.77332 27.1631 5.91113C27.1268 5.96915 27.0978 6.02718 27.0978 6.02718C27.0978 6.03443 27.0398 6.09971 26.9745 6.17224C26.902 6.24477 20.7297 12.99 20.6427 13.0915C20.5702 13.1713 20.5702 13.1713 20.5194 13.4252C20.5049 13.5122 19.1413 20.0109 19.0325 20.2575C19.0108 20.3082 16.2256 26.6981 16.2256 26.6981L11.9319 29.6065L8.27642 33.0734C8.27642 33.0734 7.58739 35.4234 7.58013 35.4451C7.57288 35.4741 8.29092 37.8386 8.32719 37.8531C8.34894 37.8676 9.48766 38.4986 9.48766 38.4986L8.94369 37.6718L9.81404 35.7643L12.1132 36.0326L13.7596 37.3164C13.8322 37.3236 16.2039 37.5485 16.2039 37.5485C16.2039 37.5485 16.5085 37.7806 16.9509 38.1505C17.0452 38.2303 17.5602 38.6582 17.785 38.8395C17.9664 38.9918 20.4904 42.0743 20.5339 42.1759C20.5557 42.2266 21.9265 45.3091 21.9265 45.3091C21.9265 45.3091 20.3091 45.7661 20.2438 45.7878C20.193 45.8023 19.7361 46.767 19.7361 46.767C19.7361 46.7815 19.7723 46.7742 19.9609 46.7089C20.4033 46.5639 20.6935 46.4769 20.737 46.4696C20.7587 46.4623 21.9555 46.252 21.9555 46.2448C21.9627 46.2375 22.0425 46.2665 22.0933 46.2883C22.115 46.2955 23.261 46.7452 23.3553 46.8322C23.4133 46.883 23.5221 46.9773 23.5946 47.0426C23.8485 47.2674 24.2547 47.6301 24.3707 47.7316C24.4287 47.7896 24.4868 47.8332 24.494 47.8332C24.5013 47.8332 24.4868 47.7679 24.4505 47.6663C24.4215 47.572 24.3707 47.4415 24.3489 47.369C24.2547 47.0934 24.2184 47.0063 24.1894 46.9628C24.1604 46.9265 22.9709 45.65 22.9709 45.65C22.9709 45.65 22.7968 44.8159 22.7896 44.7724L22.7751 44.6999L22.8766 44.5621C23.0507 44.33 23.3118 44.0036 23.3118 44.0036L24.0153 40.4714L25.3281 43.2203C25.3281 43.2203 25.3571 47.2021 25.3789 47.2094C25.3861 47.2094 25.3934 47.2094 25.3934 47.2021C25.3934 47.1949 26.8657 44.0906 26.873 44.0906C26.8802 44.0906 28.4759 47.3617 28.4759 47.3617C28.4759 47.3617 28.9618 44.2575 28.9836 44.272C28.9908 44.2792 31.0217 47.3545 31.0217 47.398C31.0289 47.3545 31.4423 44.7507 31.4496 44.7507C31.4568 44.7507 33.5457 47.7244 33.5529 47.7099C33.5602 47.7026 33.3353 44.961 33.3426 44.9537C33.3499 44.9465 37.513 47.9057 37.513 47.9057H37.7814C37.9555 47.9057 38.0498 47.8984 38.057 47.8912C38.0643 47.8839 30.7896 39.398 30.7243 39.3255C30.6663 39.2529 30.5575 39.1441 30.4922 39.0861C30.4269 39.0281 30.2964 38.912 30.2093 38.8323C30.1223 38.7525 28.5702 37.3744 28.5557 37.3527C28.4831 37.2874 23.2247 33.4578 23.2538 33.4433C23.3408 33.407 29.6581 30.8105 29.6654 30.8032C29.6871 30.7887 33.5819 18.7924 33.5892 18.7851C33.5965 18.7779 33.611 18.7271 33.6255 18.6763C33.64 18.6183 33.6617 18.582 33.6762 18.5675C33.698 18.553 33.7923 18.5385 34.1259 18.4877C34.2927 18.466 38.0498 17.9148 38.057 17.9075C38.0643 17.9002 38.0643 17.893 38.057 17.893C38.057 17.893 33.698 16.174 33.7125 16.174C33.7343 16.1668 33.8285 16.1523 33.9228 16.1378C34.0244 16.1233 34.1549 16.0943 34.2202 16.087C34.2855 16.0725 37.1359 15.5648 37.2302 15.543C37.2664 15.5358 37.3462 15.5213 37.4115 15.514C37.4768 15.4995 37.5566 15.485 37.5928 15.485C37.6581 15.4778 37.7161 15.4633 37.7596 15.4488C37.7887 15.4415 37.7887 15.4197 37.7596 15.4197C37.7451 15.4197 37.455 15.3327 37.3825 15.3037C37.3607 15.2964 37.0271 15.1804 34.96 14.5059C34.445 14.3318 34.0099 14.194 33.9954 14.1867C33.9736 14.1795 33.4659 14.0127 33.4079 13.9982C33.3571 13.9837 37.9047 12.4025 37.9192 12.4025C37.9192 12.4025 37.9192 12.3953 37.9192 12.388C37.9192 12.3735 32.9147 12.1994 32.9002 12.1994C32.8857 12.1922 35.5983 9.47233 35.5983 9.46507C35.5983 9.45057 32.1169 10.4732 32.1241 10.4515C32.1314 10.4442 34.0461 7.33271 34.0897 7.26743C34.1984 7.10787 34.2275 7.04984 34.2057 7.04984C34.1984 7.04984 30.8258 9.05166 30.8258 9.0444C30.8186 9.03715 32.7841 4.40252 32.7769 4.39526C32.7696 4.38801 29.8829 7.49227 29.8829 7.47777C29.8829 7.46326 29.8829 7.4415 29.8902 7.41974C29.8975 7.39798 31.5874 1.96553 31.5584 2.00179C31.5439 2.0163 28.5629 6.42609 28.5557 6.42609C28.5484 6.41884 30.4414 0.0434961 30.4269 0.0870138Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.94107 10.6255C6.94107 10.6255 6.8903 10.6038 6.25204 10.4732C6.25204 10.4732 0.855848 9.34902 0.768812 9.33451C0.681777 9.31275 0.543971 9.291 0.456936 9.26924C0.3699 9.25473 0.2466 9.22572 0.181324 9.21121C0.0507706 9.1822 0 9.1822 0 9.18945C0 9.18945 0.0797824 9.24023 0.188577 9.291C0.290118 9.34177 0.449683 9.4288 0.551224 9.47957C0.652765 9.53034 5.59202 12.0544 5.70082 12.1124C5.80961 12.1704 5.89665 12.2212 5.89665 12.2212C5.89665 12.2357 5.85313 12.2357 5.72983 12.2139C5.6718 12.2067 0.652765 11.4016 0.580236 11.3944C0.507706 11.3798 0.377153 11.3581 0.297371 11.3508C0.217588 11.3363 0.152312 11.3291 0.145059 11.3291C0.145059 11.3363 0.145059 11.3363 0.159565 11.3363C0.166818 11.3363 0.188577 11.3436 0.19583 11.3508C0.210335 11.3581 0.304624 11.4016 0.406165 11.4451C0.507706 11.4886 0.6165 11.5249 0.631006 11.5322C0.652765 11.5394 6.68722 13.9474 6.70172 13.9474C6.72348 13.9474 6.73799 13.9764 6.71623 13.9837C6.70898 13.9909 6.60743 13.9982 6.49864 13.9982C6.38985 14.0054 1.45784 14.2303 1.18948 14.2375C0.964642 14.2448 0.899365 14.252 0.921124 14.2665C0.928377 14.2738 1.32729 14.3536 1.4796 14.3826C1.50861 14.3898 6.89755 15.485 6.91931 15.4923C6.93382 15.4995 6.94107 15.5068 6.94107 15.5068C6.94107 15.514 6.86129 15.5358 6.75975 15.5648C6.6582 15.5938 6.52765 15.6228 6.47688 15.6373C6.26655 15.6953 2.48051 16.7035 2.45875 16.7035C2.43699 16.7108 2.37897 16.7253 2.32094 16.7398C2.13962 16.7905 1.85675 16.8631 1.81324 16.8776C1.75521 16.8921 1.67543 16.9211 1.66092 16.9356C1.65367 16.9429 1.68994 16.9429 1.73345 16.9356C1.77697 16.9356 1.9583 16.9211 2.13962 16.9138C2.31369 16.9066 7.92022 16.6745 7.92022 16.689C7.92022 16.6963 7.88395 16.7325 7.84044 16.7688C7.79692 16.805 7.72439 16.8703 7.66636 16.9138C7.61559 16.9574 3.9311 20.0181 3.90934 20.0399C3.8223 20.1051 3.85131 20.1196 3.97461 20.0616C4.0689 20.0181 8.60199 18.1251 8.60199 18.1541C8.60199 18.1613 8.58749 18.1759 8.56573 18.1904C8.53672 18.2121 4.89574 21.7153 4.91024 21.7371C4.9175 21.7516 4.96827 21.7443 5.12783 21.6935C5.24388 21.6645 9.17498 20.5766 9.18948 20.5766C9.19674 20.5766 9.233 20.6491 9.26927 20.7434C9.30553 20.8377 10.9665 24.8776 10.9665 24.8776C10.9665 24.8776 10.9012 29.6138 10.9084 29.6138C10.9157 29.6138 15.8477 26.3789 15.8477 26.3789C15.8477 26.3789 15.5068 23.0063 15.4995 22.9773C15.4923 22.9628 15.427 22.8177 15.3545 22.6654C15.2747 22.5059 11.8803 15.5938 11.8803 15.5938L6.94107 10.6255Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.2421 42.466C18.2421 42.466 17.2992 44.0109 17.2557 44.0181C17.2339 44.0254 13.9556 44.1777 13.9556 44.1777L12.418 45.6718L14.0136 45.1278C14.0136 45.1278 16.4071 45.3237 16.4579 45.3454C16.5449 45.3889 17.952 46.1577 18.1333 46.2593C18.3146 46.3608 18.3654 46.3826 18.3581 46.3536C18.3509 46.3318 17.5676 44.7217 17.5676 44.7072C17.5676 44.6926 17.5458 44.6999 18.0463 44.5693C18.6845 44.4098 18.9891 44.33 19.0254 44.3227C19.0544 44.3155 19.0834 44.2792 19.1632 44.1559C19.2212 44.0689 20.1859 42.5385 20.1859 42.5385L20.1496 42.4878C20.1133 42.437 19.9973 42.2992 19.6346 41.8567C19.5186 41.7117 18.0753 39.9492 18.068 39.9492C18.0608 39.9565 18.2421 42.466 18.2421 42.466Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M123.01 8.11607C123.01 8.11607 118.978 8.10156 118.963 8.11607C118.941 8.13057 111.224 21.1496 111.217 21.1569C111.203 21.1641 103.333 8.11607 103.333 8.11607H99.3223V29.1279H103.935V16.8776L110.049 26.9084H112.225C112.225 26.9084 118.405 16.5512 118.412 16.5585C118.419 16.5585 118.412 29.1279 118.412 29.1279H120.733H123.003V8.11607H123.01Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M128.014 8.13054C128 8.1378 128.014 29.1278 128.014 29.1278H144.275V25.233L132.852 25.2185V20.3735C132.852 20.3735 142.6 20.388 142.607 20.3735C142.622 20.359 142.622 16.602 142.607 16.573C142.6 16.5585 132.859 16.5875 132.852 16.573C132.823 16.5512 132.823 12.0544 132.852 12.0326C132.866 12.0254 143.898 12.0109 143.898 12.0109C143.898 12.0109 143.905 8.1523 143.898 8.1378C143.884 8.11604 128.022 8.12329 128.014 8.13054Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M148.171 8.13052C148.156 8.13778 148.171 29.1278 148.171 29.1278L153.117 29.1351C157.447 29.1423 158.122 29.1351 158.477 29.1206C158.702 29.1133 158.948 29.0915 159.021 29.0915C159.101 29.0843 159.26 29.0698 159.376 29.0625C159.5 29.048 159.659 29.0335 159.732 29.019C160.232 28.9465 160.312 28.9392 160.515 28.8957C160.856 28.8304 161.197 28.7506 161.277 28.7361C161.32 28.7216 161.443 28.6926 161.559 28.6636C161.668 28.6346 161.777 28.6056 161.799 28.5983C161.821 28.5911 161.871 28.5766 161.915 28.5621C161.958 28.5476 162.074 28.5113 162.169 28.4823C162.372 28.417 162.423 28.4025 162.517 28.3662C163.003 28.1777 163.112 28.1341 163.17 28.1124C163.293 28.0544 163.445 27.9891 163.561 27.9311C163.714 27.8658 163.996 27.7135 164.33 27.5322C164.685 27.3363 165.433 26.8286 165.686 26.611C165.737 26.5675 165.846 26.4805 165.918 26.4152C166.252 26.1396 166.89 25.4796 167.137 25.1604C167.18 25.1024 167.253 25.0154 167.289 24.9646C167.442 24.7615 167.485 24.7108 167.659 24.4497C167.761 24.2973 167.884 24.1015 167.935 24.0072C167.986 23.9129 168.044 23.8186 168.058 23.7896C168.073 23.7606 168.109 23.7026 168.131 23.6663C168.174 23.5938 168.225 23.4778 168.305 23.3182C168.326 23.2747 168.377 23.1659 168.421 23.0716C168.464 22.9773 168.501 22.8975 168.501 22.8903C168.501 22.883 168.508 22.8685 168.515 22.854C168.53 22.8322 168.544 22.7815 168.609 22.6074C168.617 22.5784 168.638 22.5276 168.653 22.4986C168.667 22.4623 168.682 22.4261 168.682 22.4116C168.689 22.3971 168.696 22.3681 168.711 22.3463C168.733 22.2955 168.747 22.2375 168.798 22.0852C168.878 21.8168 168.914 21.708 168.921 21.679C168.928 21.6645 168.965 21.505 169.008 21.3309C169.044 21.1496 169.088 20.9827 169.095 20.9537C169.11 20.8957 169.139 20.7434 169.197 20.33C169.219 20.2067 169.233 20.0544 169.248 19.8875C169.32 19.068 169.313 19.1187 169.306 18.5095C169.298 18.1831 169.291 17.8785 169.284 17.8205C169.277 17.7624 169.262 17.6391 169.255 17.5376C169.233 17.2765 169.204 17.0081 169.19 16.9283C169.175 16.8631 169.161 16.776 169.117 16.4787C169.103 16.4061 169.088 16.3191 169.088 16.2973C169.066 16.1958 169.008 15.9637 168.979 15.8332C168.965 15.7534 168.863 15.398 168.827 15.2892C168.812 15.2457 168.783 15.1586 168.769 15.0934C168.747 15.0281 168.718 14.941 168.704 14.8903C168.682 14.8468 168.667 14.7815 168.653 14.7597C168.646 14.738 168.624 14.6799 168.602 14.6292C168.588 14.5784 168.551 14.4914 168.522 14.4261C168.479 14.31 168.413 14.1795 168.261 13.8531C168.225 13.7733 168.189 13.708 168.189 13.7008C168.189 13.7008 168.16 13.6428 168.123 13.5847C168.087 13.5267 168.044 13.4397 168.015 13.3962C167.993 13.3526 167.964 13.3019 167.949 13.2801C167.935 13.2584 167.913 13.2148 167.899 13.1858C167.884 13.1568 167.782 12.9973 167.674 12.8377C167.463 12.5186 167.173 12.1269 166.97 11.9021C166.898 11.8223 166.796 11.7062 166.738 11.6337C166.644 11.5249 166.209 11.097 166.056 10.9664C165.498 10.4805 164.765 9.96552 164.163 9.64639C164.054 9.58836 163.924 9.51584 163.873 9.48682C163.822 9.45781 163.714 9.40704 163.627 9.37078C163.431 9.28374 163.394 9.26923 163.257 9.20396C163.083 9.12418 162.401 8.86307 162.154 8.79054C162.038 8.75428 161.9 8.71076 161.85 8.689C161.799 8.67449 161.712 8.64548 161.646 8.63098C161.588 8.61647 161.393 8.57295 161.219 8.52943C161.044 8.48592 160.805 8.43515 160.682 8.41339C160.566 8.39163 160.421 8.36262 160.363 8.35536C160.254 8.33361 159.993 8.29734 159.768 8.26833C159.703 8.26108 159.587 8.24657 159.507 8.23932C159.434 8.23206 159.289 8.21756 159.195 8.20305C159.101 8.1958 158.956 8.18129 158.883 8.17404C158.811 8.16679 158.491 8.15228 158.187 8.15228C157.476 8.11602 148.185 8.11602 148.171 8.13052ZM158.02 12.1196C158.404 12.1414 158.564 12.1559 158.992 12.2212C159.239 12.2574 159.601 12.3372 159.826 12.3953C159.877 12.4098 159.935 12.4243 159.957 12.4315C160.015 12.446 160.297 12.5403 160.421 12.5911C160.486 12.6128 160.559 12.6419 160.588 12.6491C160.617 12.6636 160.696 12.6926 160.754 12.7216C160.812 12.7507 160.87 12.7724 160.87 12.7724C160.899 12.7724 161.385 13.0335 161.523 13.1205C161.668 13.2148 161.705 13.2366 161.828 13.3236C162.125 13.5267 162.299 13.679 162.604 13.9837C163.003 14.3826 163.206 14.6292 163.467 15.0571C163.605 15.2747 163.75 15.5648 163.844 15.7969C163.88 15.8984 163.924 15.9927 163.931 16.0072C164.018 16.2103 164.178 16.7833 164.221 17.0009C164.229 17.0299 164.243 17.1242 164.258 17.2112C164.352 17.7479 164.388 18.3644 164.366 18.9882C164.359 19.1985 164.345 19.3726 164.345 19.3726C164.345 19.3798 164.33 19.4524 164.323 19.5394C164.316 19.6264 164.308 19.7352 164.301 19.7715C164.294 19.8078 164.279 19.8875 164.272 19.9383C164.2 20.4098 164.011 21.0698 163.844 21.4542C163.793 21.5702 163.598 21.9546 163.547 22.0489C163.112 22.825 162.423 23.5358 161.617 24.0507C161.378 24.2031 161.023 24.3989 160.798 24.4932C160.733 24.5222 160.66 24.5512 160.638 24.5584C160.588 24.5802 160.363 24.6672 160.297 24.689C160.08 24.7615 159.935 24.805 159.877 24.8196C159.84 24.8268 159.775 24.8486 159.732 24.8558C159.637 24.8848 159.623 24.8848 159.34 24.9429C159.014 25.0081 158.999 25.0154 158.825 25.0371C158.39 25.0879 158.187 25.1097 157.752 25.1242C157.273 25.1387 153.015 25.1242 153.015 25.1242C153.015 25.1242 153.008 12.1051 153.015 12.1051C153.044 12.0979 157.737 12.1051 158.02 12.1196Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M56.2682 33.3636C56.1449 33.3709 55.9926 33.4071 55.9128 33.4361C55.8983 33.4434 55.8548 33.4652 55.8113 33.4797C55.5864 33.5812 55.3833 33.7408 55.26 33.9221C55.1005 34.1614 55.0207 34.3718 54.9264 34.807C54.9192 34.836 53.9763 39.2965 53.9618 39.34C53.9545 39.3763 53.94 39.3836 53.8167 39.4271C53.4976 39.5359 53.3598 39.5866 53.2075 39.6664C52.9101 39.8115 52.7143 40.0001 52.62 40.2467C52.5837 40.3482 52.5619 40.3627 52.5547 40.5585C52.5547 40.7326 52.5692 40.7834 52.591 40.8487C52.678 41.1388 52.9246 41.3636 53.2437 41.4507C53.3888 41.4942 53.6789 41.4942 53.853 41.4507C54.0415 41.3999 54.1721 41.3491 54.3317 41.2476C54.5202 41.1315 54.6508 40.9792 54.7523 40.7761C54.8829 40.5223 55.057 39.7607 55.057 39.7607L55.9201 35.7063H56.5221L56.5728 35.3219H55.9926C55.9926 35.3219 56.0796 34.9157 56.1086 34.8142C56.2029 34.3863 56.3117 34.0672 56.6236 34.0672C56.9862 34.0672 56.9282 34.5458 56.9282 34.5458H57.3706C57.3706 34.5458 57.4359 34.1687 57.3489 33.9439C57.2981 33.806 57.2474 33.7263 57.1458 33.632C57.037 33.5304 56.9935 33.4942 56.8774 33.4434C56.7106 33.3709 56.5583 33.3491 56.2682 33.3636ZM53.8965 39.6809C53.8965 39.6809 53.882 39.7462 53.8675 39.8187C53.853 39.8913 53.8167 40.0218 53.8022 40.1089C53.7442 40.37 53.7007 40.4715 53.6136 40.6021C53.5266 40.7326 53.396 40.7906 53.2655 40.7616C53.1639 40.7399 53.0769 40.6818 53.0261 40.5876C53.0189 40.573 53.0116 40.515 53.0116 40.4643C53.0116 40.2539 53.1204 40.0798 53.3308 39.9348C53.4105 39.8768 53.6644 39.7535 53.7514 39.7172C53.7877 39.7027 53.8312 39.6882 53.8385 39.6809C53.853 39.6737 53.8965 39.6664 53.8965 39.6809Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M63.2888 33.9293C63.2888 33.9366 62.8899 35.7208 62.8899 35.7208C62.8899 35.7208 62.8609 35.5105 62.6868 35.4307C62.462 35.3074 61.9688 35.3146 61.6351 35.4524C61.5118 35.5032 61.374 35.583 61.2797 35.6555C61.0694 35.8078 60.7648 36.1632 60.6415 36.3881C60.6197 36.4316 60.5907 36.4824 60.5762 36.5114C60.4674 36.6999 60.3224 37.0844 60.2643 37.3382C60.2571 37.3817 60.2353 37.4543 60.2281 37.4978C60.2063 37.5703 60.1991 37.6356 60.17 37.8604C60.1628 37.9112 59.967 39.1152 60.9099 39.4633C61.0114 39.4923 61.5626 39.5794 61.8527 39.3473C62.0776 39.1805 62.2371 39.0499 62.3604 38.8758C62.3967 38.8178 62.433 38.7815 62.4402 38.7815C62.4475 38.7888 62.4547 38.8178 62.4692 38.8541C62.5128 39.0354 62.578 39.1587 62.6941 39.2602C62.7884 39.3473 62.9189 39.4125 63.0422 39.4343C63.1945 39.4633 63.4774 39.4488 63.6225 39.4053C63.6442 39.398 63.695 39.3835 63.7313 39.3763C63.9198 39.3183 64.1592 39.1659 64.326 38.9846C64.4856 38.8178 64.6596 38.5494 64.7612 38.3028C64.8264 38.1433 64.87 38.0055 64.87 38.0055H64.5218C64.5218 38.0055 64.413 38.3101 64.3478 38.4116C64.2172 38.6147 64.0576 38.709 63.8545 38.709C63.6877 38.709 63.6007 38.651 63.5644 38.5277C63.5354 38.4116 63.5499 38.3028 63.666 37.7806C63.6805 37.6936 64.4856 33.7552 64.4856 33.7552C64.4348 33.7625 63.2888 33.9221 63.2888 33.9293ZM62.549 35.8586C62.6651 35.8876 62.7303 35.9384 62.7811 36.0544C62.8101 36.1125 62.8101 36.156 62.7884 36.2648C62.7811 36.3083 62.7594 36.3881 62.7521 36.4461C62.7376 36.4969 62.7231 36.5694 62.7231 36.5984C62.6651 36.8595 62.52 37.5413 62.4185 38.0345C62.3677 38.2666 62.2879 38.4189 62.1283 38.564C61.9688 38.7018 61.7875 38.7598 61.6351 38.709C61.4901 38.6655 61.4176 38.5857 61.374 38.4116C61.345 38.3028 61.345 37.8894 61.3668 37.7444C61.4103 37.4688 61.4611 37.2294 61.5046 37.0989C61.5409 36.9828 61.5916 36.8305 61.5989 36.8087C61.6061 36.7942 61.6206 36.758 61.6279 36.729C61.7512 36.4243 61.947 36.1342 62.0993 36.0037C62.2081 35.9166 62.3024 35.8804 62.4692 35.8514C62.4765 35.8441 62.5128 35.8513 62.549 35.8586Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M70.1721 33.9148C70.1721 33.9148 69.3888 37.5268 69.3308 37.7879C69.2365 38.2448 69.2147 38.4116 69.222 38.6147C69.28 39.1224 69.4686 39.4996 70.1721 39.4996C70.5565 39.4778 70.9482 39.3037 71.2311 39.0209C71.4051 38.8395 71.5574 38.6147 71.6807 38.3246C71.6952 38.2883 71.717 38.2375 71.7243 38.2158C71.775 38.107 71.7968 38.0272 71.7823 38.02C71.7678 38.0127 71.4704 38.0127 71.4631 38.02C71.4559 38.0272 71.4414 38.0635 71.4269 38.107C71.3471 38.3246 71.1803 38.5422 71.0135 38.6437C70.5275 38.9193 70.3752 38.5929 70.397 38.3753C70.4042 38.2811 71.3544 33.777 71.3544 33.777L70.1721 33.9148Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M76.0764 34.2702L75.8153 35.3726H75.5542L75.5035 35.6918H75.7573C75.7428 35.7353 75.3584 37.5848 75.3366 37.6936C75.2424 38.1215 75.2133 38.2883 75.2133 38.5204C75.2061 38.8613 75.2859 39.0861 75.4599 39.2602C75.5542 39.3545 75.6848 39.4343 75.8081 39.4705C75.8951 39.4996 76.2723 39.4996 76.3521 39.4778C76.3811 39.4706 76.4391 39.456 76.4826 39.4415C76.6567 39.398 76.9541 39.2457 77.1136 39.1152C77.3385 38.9338 77.5706 38.5712 77.7374 38.136C77.7809 38.02 77.7881 37.9982 77.7591 37.9982C77.6503 37.9909 77.4545 37.9982 77.4473 38.0055C77.44 38.0127 77.4182 38.0562 77.4037 38.107C77.3167 38.3391 77.1354 38.5567 76.9613 38.6437C76.838 38.7017 76.7075 38.7235 76.5987 38.7017C76.4391 38.6655 76.3811 38.5857 76.3811 38.3971C76.3811 38.3318 76.3956 38.2303 76.4101 38.165C76.4246 38.0997 76.4391 38.0127 76.4464 37.9764C76.4536 37.9402 76.9323 35.7063 76.9323 35.7063H77.4182L77.4618 35.3654H77.0193L77.2369 34.0889L76.0764 34.2702Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M67.1918 35.3219C66.996 35.3509 66.9452 35.3654 66.8364 35.4017C66.6841 35.4524 66.4883 35.5467 66.3723 35.641C66.2272 35.7498 65.9806 36.0182 65.85 36.2067C65.7485 36.3518 65.5962 36.6274 65.5454 36.7652C65.5019 36.8813 65.4584 37.0046 65.4294 37.0916C65.4149 37.1424 65.3931 37.2149 65.3786 37.2512C65.3641 37.3164 65.3496 37.3745 65.3061 37.563C65.2626 37.7589 65.248 37.9184 65.248 38.2013C65.248 38.4987 65.2626 38.5567 65.3061 38.738C65.3278 38.8396 65.4221 39.0136 65.4947 39.1079C65.6325 39.282 65.8355 39.398 66.0966 39.4633C66.365 39.5431 66.8364 39.4851 67.025 39.4488C67.1846 39.4125 67.4239 39.3183 67.5835 39.224C67.8809 39.0499 68.1275 38.8396 68.3668 38.5422C68.5264 38.3464 68.7222 38.0055 68.7222 38.0055H68.4756L68.287 38.194C67.8809 38.6002 67.6778 38.7235 67.3151 38.8033C66.6043 38.9048 66.4811 38.6002 66.4448 38.2666C66.4303 38.1143 66.4738 37.8242 66.4738 37.8242C66.4738 37.8242 66.5318 37.8096 66.5971 37.8024C67.569 37.7081 68.1347 37.1351 68.3015 36.4316C68.3306 36.3155 68.3378 35.9674 68.316 35.8731C68.258 35.6338 68.113 35.4597 67.8881 35.3872C67.6995 35.3146 67.3877 35.2929 67.1918 35.3219ZM67.5908 35.7716C67.6415 35.8078 67.6705 35.8586 67.685 35.9166C67.6995 35.9964 67.6995 36.1777 67.685 36.2793C67.6053 36.758 67.1991 37.2367 66.7567 37.3745C66.6479 37.4035 66.5463 37.418 66.5391 37.4035C66.5318 37.3962 66.5391 37.3527 66.5536 37.3092C66.6044 37.1061 66.6116 37.0553 66.6261 37.0263C66.6334 37.0118 66.6479 36.961 66.6551 36.9175C66.6986 36.7725 66.8002 36.5114 66.8872 36.3445C66.9597 36.2067 66.9597 36.2067 67.0323 36.0979C67.1991 35.8223 67.4529 35.6773 67.5908 35.7716Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M80.0806 35.3509C79.6454 35.3944 79.319 35.5757 78.9999 35.9311C78.8041 36.156 78.6082 36.4388 78.514 36.6709C78.4995 36.7072 78.4777 36.7507 78.4704 36.7652C78.4124 36.903 78.3036 37.2149 78.2601 37.4252C77.8902 38.9919 78.63 39.3618 78.8476 39.4416C78.9927 39.4923 79.9718 39.6954 80.378 38.8831L80.465 38.738C80.465 38.738 80.4723 38.8106 80.4795 38.8251C80.523 39.0136 80.5593 39.3908 80.9872 39.4778C81.2773 39.5213 81.5022 39.4996 81.611 39.4706C81.6835 39.4488 81.7125 39.4416 81.7633 39.4198C81.7778 39.4126 81.8213 39.3908 81.8721 39.369C82.2202 39.2167 82.4886 38.9411 82.6917 38.5349C82.7714 38.3681 82.8947 38.0272 82.8947 38.0272L82.5756 38.02C82.5756 38.02 82.4451 38.3391 82.3653 38.4769C82.2927 38.5857 82.1767 38.6945 82.1042 38.7308C81.9809 38.7888 81.8213 38.7815 81.7125 38.7235C81.611 38.6655 81.5602 38.5059 81.582 38.3174C81.5892 38.2303 82.184 35.4089 82.1767 35.4017C82.1694 35.3944 81.0162 35.4017 81.0162 35.4017L80.9292 35.7208C80.9292 35.7208 80.8422 35.4089 80.4432 35.3654C80.3925 35.3582 80.3272 35.3582 80.2982 35.3509C80.2619 35.3364 80.1676 35.3437 80.0806 35.3509ZM80.5956 35.8586C80.6826 35.8731 80.7479 35.9239 80.7986 36.0109C80.8422 36.0835 80.8422 36.185 80.8131 36.3301C80.7769 36.4896 80.5738 37.4398 80.5448 37.5776C80.4142 38.2013 80.3852 38.2883 80.2257 38.4769C80.1459 38.5712 80.0298 38.651 79.9065 38.7018C79.834 38.7308 79.6889 38.7235 79.6164 38.6945C79.4351 38.6147 79.3698 38.4552 79.3698 38.0853C79.3698 37.4252 79.6454 36.5694 79.9863 36.156C80.1169 35.9892 80.2547 35.9021 80.4142 35.8659C80.523 35.8369 80.5158 35.8368 80.5956 35.8586Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.8053 35.3872C57.8053 35.3872 57.225 38.0998 57.2033 38.2666C57.1235 38.8831 57.3121 39.1152 57.3121 39.1225C57.4934 39.3836 57.7037 39.4561 57.769 39.4706C57.9503 39.5214 58.2114 39.5141 58.4145 39.4634C58.6249 39.4053 58.886 39.282 59.06 39.1515C59.2268 39.0282 59.4154 38.7816 59.5532 38.5205C59.6113 38.4117 59.633 38.3537 59.7128 38.1651C59.7201 38.1506 59.7346 38.1143 59.7491 38.0853C59.7636 38.0563 59.7636 38.0273 59.7563 38.02C59.7491 38.0128 59.6765 38.0055 59.5895 38.0055H59.4372L59.4082 38.0781C59.3211 38.3029 59.2414 38.4189 59.1253 38.5277C58.973 38.6655 58.8569 38.7163 58.6756 38.7163C58.4073 38.7236 58.3202 38.535 58.429 38.0055C58.4508 37.904 58.9657 35.3872 58.9657 35.3872H57.8053V35.3872Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.8408 35.3872C72.8408 35.3872 72.2534 38.1361 72.2388 38.2013C72.2171 38.3029 72.2098 38.6293 72.2243 38.7308C72.2606 38.9557 72.2969 39.0572 72.3912 39.1805C72.4927 39.3111 72.6233 39.4053 72.8191 39.4706C72.9206 39.5069 73.2833 39.4996 73.4138 39.4634C73.7257 39.3763 74.0158 39.2168 74.2044 39.0427C74.2914 38.9629 74.451 38.7526 74.509 38.6438C74.5453 38.5785 74.6323 38.4044 74.6686 38.3247C74.6831 38.2956 74.6976 38.2594 74.7049 38.2449C74.7121 38.2304 74.7266 38.1868 74.7411 38.1506C74.7556 38.1143 74.7774 38.0635 74.7846 38.049C74.7919 38.0345 74.7991 38.0128 74.7919 38.0128C74.7774 38.0055 74.4728 37.9983 74.4583 38.0128C74.451 38.02 74.4365 38.049 74.422 38.0853C74.3567 38.3029 74.1609 38.5495 73.9941 38.6365C73.878 38.6946 73.8127 38.7163 73.6967 38.7163C73.5589 38.7163 73.4791 38.68 73.4283 38.6003C73.3485 38.448 73.3848 38.3609 73.4719 37.904C73.4864 37.8532 73.9941 35.3872 73.9941 35.3872H72.8408V35.3872Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M59.25 34.292C59.25 33.9366 58.9599 33.6465 58.6045 33.6465C58.2491 33.6465 57.959 33.9366 57.959 34.292C57.959 34.6474 58.2491 34.9375 58.6045 34.9375C58.9671 34.9375 59.25 34.6474 59.25 34.292Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M74.291 34.292C74.291 33.9366 74.0009 33.6465 73.6455 33.6465C73.2901 33.6465 73 33.9366 73 34.292C73 34.6474 73.2901 34.9375 73.6455 34.9375C74.0009 34.9375 74.291 34.6474 74.291 34.292Z"
                  fill="#000D68"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M86.4703 38.0128L85.919 38.3899L85.7595 35.1406L84.5555 35.3074C84.5555 35.3074 84.4975 35.4525 84.4467 35.6121C84.3524 35.9022 84.3016 36.0472 84.2726 36.1198C84.2654 36.1415 84.2291 36.2431 84.1856 36.3446C84.1493 36.4462 84.1058 36.5549 84.084 36.5985C84.0695 36.6347 84.055 36.671 84.055 36.671C84.055 36.671 84.0115 36.7798 83.9535 36.9103C83.8592 37.1207 83.8084 37.2222 83.6198 37.5849C83.5763 37.6719 83.5546 37.7009 83.482 37.7517C83.2064 37.962 83.0904 38.2521 83.1339 38.5785C83.1774 38.8976 83.3225 39.1297 83.5763 39.3038C83.6924 39.3836 83.8084 39.4271 83.9898 39.4779C84.0913 39.4996 84.5482 39.4996 84.6788 39.4706C84.7948 39.4489 85.0124 39.3908 85.0487 39.3763C85.0632 39.3691 85.0995 39.3546 85.1285 39.3401C85.1575 39.3256 85.201 39.3111 85.2155 39.2966C85.2373 39.2821 85.2663 39.2675 85.2808 39.2603C85.832 38.9484 86.8111 38.0055 86.8111 38.0055H86.4703V38.0128ZM84.5627 38.6656C84.4829 38.7453 84.3742 38.8106 84.2509 38.8396C84.1493 38.8686 83.9172 38.8614 83.8302 38.8324C83.7359 38.7961 83.6561 38.7236 83.6126 38.6365C83.5836 38.5713 83.5401 38.3682 83.5473 38.3319C83.6053 38.3754 83.6851 38.4044 83.7649 38.4044C83.968 38.4044 84.1348 38.2376 84.1348 38.0345C84.1348 37.8967 84.0623 37.7807 83.9462 37.7154H83.939C83.939 37.7154 84.5845 36.2358 84.5917 36.2286C84.5917 36.2286 84.7441 37.9112 84.7441 38.0853C84.7441 38.3827 84.7005 38.5205 84.5627 38.6656Z"
                  fill="#000D68"
                />
              </g>
            </svg>
          </Link>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-8 text-sm text-gray-400 lg:col-span-3">
            <div>
              <h3 className="text-lg text-black font-medium tracking-tight">
                Socials
              </h3>
              <ul role="list" className="mt-4 space-y-1">
                <li>
                  <a
                    href="https://www.linkedin.com/company/armed-inc/"
                    className="hover:text-black flex gap-2 items-center"
                  >
                    <Linkedin className="inline" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/armed.kr"
                    className="hover:text-black flex gap-2 items-center"
                  >
                    <Instagram className="inline" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@armedinc?si=0cE18n1X5JFscY0g"
                    className="hover:text-black flex gap-2 items-center"
                  >
                    <Youtube className="inline" /> YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/armed.kr?mibextid=LQQJ4d"
                    className="hover:text-black flex gap-2 items-center"
                  >
                    <Facebook className="inline" /> Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-lg text-black font-medium tracking-tight">
                All pages
              </h3>
              <ul role="list" className="mt-4 space-y-1">
                <li>
                  <Link href="/" className="hover:text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/about" className="hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-black">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/education" className="hover:text-black">
                    Education
                  </a>
                </li>
                <li>
                  <a href="/physicians" className="hover:text-black">
                    Physicians
                  </a>
                </li>
                <li>
                  <a href="/patients" className="hover:text-black">
                    Patients
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-lg text-black font-medium tracking-tight">
                Corporate Address
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <a
                    className="hover:text-black"
                    href="https://goo.gl/maps/HbhFe4XCTHxuxcEK7"
                  >
                    <strong>HQ Office:</strong> 6th floor, 43 Daeji-ro, Suji-gu,
                    Yongin-si, Gyeonggi-do, South Korea 16872
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-black"
                    href="https://goo.gl/maps/yVcCWNmF5K6hu5f68"
                  >
                    <strong>EU Office:</strong> Aaltje Noordewierstraat 337, Den
                    Haag, Netherlands, Post Code: 2551SH
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
