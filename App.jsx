// Docs {@link https://tailwindcss.com/docs/text-color}
import React from 'react';

export function App() {
  return (
    <div className='App h-full py-3 px-6 bg-white' class='dark:bg-gray-900'>
      <div class='flex justify-between items-center p-3 font-mono text-red-500 mx-2'>
        <div class='text-2xl font-bold'>
          <h1>Kidobashi</h1>
        </div>
        <div class='text-center float-end items-center'>
          <ul class='inline-flex space-x-20'>
            <li class='text-center hover:underline'>Home</li>
            <li class='text-center hover:underline'>Contact Us</li>
            <li class='text-center hover:underline'>About Us</li>
            <li class='text-center hover:underline'>Services</li>
          </ul>
        </div>
      </div>
      <div class='container items-center justify-between dark:bg-gray-900 border-black border-solid p-2 rounded shadow-lg h-60 flex'>
        <div class='columns-6 border-black border-black border-2 rounded ml-20'>
          <img src='./webdev.jpg' width="100" height="40" />
        </div>
        <div class='mr-28'>
          <p class='font-mono text-white text-2xl'>
            Hi, I am <b class='text-3xl'>Daryl Don Abril</b>{' '}
          </p>
          <br />
          <p class='font-mono font-bold text-5xl text-red-500'>
            &nbsp; Fullstack Developer
          </p>
        </div>
      </div>
      <p class='container columns-6 bg-black text-white mt-4 flex items-center p-1.5 font-mono font-bold text-2xl '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='size-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3'
          />
        </svg>
        Technology stack
      </p>
      <div class='container justify-items-center font-mono font-medium text-white text-center dark:bg-gray-900 h-42 border-2 grid grid-cols-3 gap-4'>
        <div class='p-2 text-center flex'>
          <svg
            class='w-[26px] h-[26px] text-orange-600 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z' />
          </svg>
          HTML
        </div>
        <div class='flex p-2'>
          <svg
            class='w-[26px] h-[26px] text-blue-500 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z' />
          </svg>
          CSS
        </div>
        <div class='p-2 flex'>
          <svg
            class='fill-yellow-400'
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='24'
            viewBox='0 0 24 24'
            id='javascript'
          >
            <path d='M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z'></path>
          </svg>
          Javascript
        </div>
        <div class='p-2 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='size-6'
          >
            <path
              stroke-linejoin='round'
              d='M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z'
            />
          </svg>
          Bootstrap
        </div>
        <div class='p-2 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='30'
            preserveAspectRatio='xMinYMin meet'
            viewBox='0 0 256 134'
            id='php'
          >
            <g fill-rule='evenodd'>
              <ellipse
                cx='128'
                cy='66.63'
                fill='#8993BE'
                rx='128'
                ry='66.63'
              ></ellipse>
              <path
                fill='#232531'
                d='M35.945 106.082l14.028-71.014H82.41c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438H56.11l-3.507 18.411H35.945zm23.671-31.561L64 48.219h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zM100.192 87.671l14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014H124.74l-7.89 39.452h-16.658zM153.425 106.082l14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411h-16.657zm23.67-31.561l4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z'
              ></path>
            </g>
          </svg>
          &nbsp;PHP
        </div>
        <div class='p-2 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enable-background='new 0 0 20 24'
            viewBox='0 0 24 24'
            height='25'
            width='25'
            id='visual-studio-code'
          >
            <polygon
              fill='#1677C7'
              points='18 19.485 0 17.939 0 18.5 18 24 24 21.5 24 2.5 18 0 18 19.485'
            ></polygon>
            <polygon
              fill='#1368AD'
              points='18 0 18 19.485 0 17.939 0 18.5 18 24 21 22.75 21 1.25 18 0'
            ></polygon>
            <path
              fill='#1677C7'
              d='M2.419,13.94l3.434-2.59L12,17l3-1.456V4.456L12,3L5.853,8.651L2.418,6.062L1,6.889L4.385,10L1,13.112L2.419,13.94L2.419,13.94z M12,6.717v6.566L7.644,10L12,6.717L12,6.717z'
            ></path>
            <polygon
              fill='#1368AD'
              points='15 10 12 10 12 13.283 7.644 10 4.385 10 1 13.112 2.419 13.94 5.853 11.35 12 17 15 15.544 15 10'
            ></polygon>
          </svg>
          &nbsp;Visual Studio
        </div>
        <div class='p-2 flex'>
          <svg
            class='w-[26px] h-[26px] text-red-400 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              stroke-linejoin='round'
              d='m17 13 3.4641-2V7L17 5l-3.4641 2v4M17 13l-3.4641-2M17 13v4l-7.00001 4M17 13V9m0 4-7.00001 4m3.53591-6L10.5 12.7348M9.99999 21l-3.4641-2.1318M9.99999 21v-4m-3.4641 2v-.1318m0 0V15L10.5 12.7348m-3.96411 6.1334L3.5 17V5m0 0L7 3l3.5 2m-7 0 2.99999 2M10.5 5v7.7348M10.5 5 6.49999 7M17 9l3.5-2M17 9l-3.5-2M9.99999 17l-3.5-2m0 .5V7'
            />
          </svg>
          Laravel
        </div>
        <div class='p-2 flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 192.756 192.756'
            id='mysql'
          >
            <g fill-rule='evenodd' clip-rule='evenodd'>
              <path fill='#fff' d='M0 0h192.756v192.756H0V0z'></path>
              <path
                fill='#00678c'
                d='M8.504 128.215h5.8v-22.977l9.058 20.033c1.026 2.408 2.499 3.301 5.354 3.301 2.856 0 4.239-.893 5.31-3.301l9.013-20.033v22.977h5.845v-22.977c0-2.23-.893-3.303-2.767-3.883-4.417-1.338-7.362-.178-8.7 2.811l-8.878 19.811-8.567-19.811c-1.294-2.988-4.284-4.148-8.745-2.811-1.829.58-2.722 1.652-2.722 3.883v22.977h-.001zM53.702 109.521h5.845v12.627c-.044.713.223 2.32 3.391 2.363 1.651.045 12.582 0 12.671 0v-15.08h5.845v20.658c0 5.086-6.291 6.201-9.236 6.246H53.835v-3.881h18.427c3.748-.402 3.302-2.275 3.302-2.9v-1.518H63.205c-5.756-.045-9.459-2.588-9.503-5.488 0-.267.133-12.939 0-13.027zM179.076 94.886c-3.568-.089-6.336.268-8.656 1.25-.668.269-1.74.269-1.828 1.116.357.355.4.936.713 1.428.535.893 1.473 2.096 2.32 2.721.938.715 1.875 1.428 2.855 2.053 1.74 1.07 3.703 1.695 5.398 2.766.982.625 1.963 1.428 2.945 2.098.49.357.803.938 1.428 1.16v-.135c-.312-.4-.402-.98-.713-1.428-.447-.445-.893-.848-1.34-1.293-1.293-1.74-2.9-3.258-4.641-4.506-1.428-.982-4.551-2.32-5.131-3.971l-.088-.09c.98-.09 2.141-.447 3.078-.715 1.518-.4 2.9-.312 4.461-.713.715-.179 1.428-.402 2.143-.625v-.401c-.803-.803-1.383-1.874-2.23-2.632-2.275-1.963-4.775-3.882-7.363-5.488-1.383-.892-3.168-1.473-4.639-2.23-.537-.268-1.428-.402-1.74-.848-.805-.981-1.25-2.275-1.83-3.436-1.293-2.454-2.543-5.175-3.658-7.763-.803-1.74-1.295-3.48-2.275-5.086-4.596-7.585-9.594-12.181-17.268-16.687-1.65-.937-3.613-1.339-5.711-1.829-1.115-.045-2.23-.134-3.346-.179-.715-.312-1.428-1.16-2.053-1.562-2.543-1.606-9.102-5.086-10.977-.491-1.205 2.9 1.785 5.755 2.811 7.228.76 1.026 1.74 2.186 2.277 3.346.311.758.4 1.562.713 2.365.713 1.963 1.383 4.149 2.32 5.979.49.937 1.025 1.919 1.65 2.767.357.491.982.714 1.115 1.517-.625.893-.668 2.231-1.025 3.347-1.607 5.042-.982 11.288 1.293 14.991.715 1.115 2.41 3.569 4.686 2.632 2.008-.803 1.561-3.346 2.141-5.577.135-.535.045-.892.312-1.249v.089c.625 1.249 1.25 2.454 1.83 3.703 1.383 2.186 3.793 4.462 5.801 5.979 1.07.803 1.918 2.187 3.256 2.677v-.135h-.088c-.268-.4-.67-.579-1.027-.892-.803-.803-1.695-1.785-2.32-2.677-1.873-2.498-3.523-5.265-4.996-8.12-.715-1.383-1.34-2.9-1.918-4.283-.27-.536-.27-1.339-.715-1.606-.67.981-1.65 1.83-2.143 3.034-.848 1.918-.936 4.283-1.248 6.737-.18.045-.09 0-.18.089-1.426-.356-1.918-1.829-2.453-3.078-1.338-3.168-1.562-8.254-.402-11.913.312-.937 1.652-3.882 1.117-4.774-.27-.848-1.16-1.338-1.652-2.008-.58-.848-1.203-1.918-1.605-2.855-1.07-2.499-1.605-5.265-2.766-7.764-.537-1.16-1.473-2.365-2.232-3.435-.848-1.205-1.783-2.053-2.453-3.48-.223-.491-.535-1.294-.178-1.829.088-.357.268-.491.623-.58.58-.491 2.232.134 2.812.401 1.65.669 3.033 1.294 4.416 2.23.625.446 1.295 1.294 2.098 1.518h.938c1.428.312 3.033.089 4.371.49 2.365.759 4.506 1.874 6.426 3.079 5.844 3.703 10.664 8.968 13.92 15.259.535 1.026.758 1.963 1.25 3.034.938 2.187 2.098 4.417 3.033 6.559.938 2.097 1.83 4.239 3.168 5.979.67.937 3.346 1.427 4.551 1.918.893.401 2.275.759 3.08 1.249 1.516.937 3.033 2.008 4.461 3.034.713.534 2.945 1.649 3.078 2.541z'
              ></path>
              <path
                fill='#00678c'
                d='M133.566 56.114c-.758 0-1.293.089-1.828.223v.089h.088c.357.714.982 1.205 1.428 1.829.357.714.67 1.428 1.027 2.142l.088-.089c.625-.446.938-1.16.938-2.231-.268-.312-.312-.625-.535-.937-.268-.446-.848-.669-1.206-1.026z'
              ></path>
              <path
                fill='#ce8b2c'
                d='M85.916 128.215h16.776c1.963 0 3.838-.4 5.354-1.115 2.543-1.16 3.748-2.721 3.748-4.773v-4.283c0-1.65-1.383-3.213-4.148-4.283-1.428-.535-3.213-.848-4.953-.848h-7.049c-2.365 0-3.48-.715-3.793-2.275-.044-.178-.044-.357-.044-.535v-2.633c0-.135 0-.312.044-.49.312-1.205.937-1.518 2.99-1.74h17.177v-3.883H95.687c-2.365 0-3.614.135-4.729.492-3.436 1.07-4.953 2.766-4.953 5.754v3.393c0 2.631 2.945 4.863 7.942 5.398.535.045 1.115.045 1.695.045h6.024c.223 0 .445 0 .623.045 1.83.178 2.633.49 3.168 1.158.357.357.447.67.447 1.072v3.391c0 .4-.268.938-.803 1.383-.537.445-1.385.758-2.5.803-.223 0-.355.045-.58.045H85.916v3.879zM148.111 121.479c0 3.971 2.99 6.201 8.969 6.648.58.045 1.115.088 1.695.088h15.17v-3.881h-15.303c-3.393 0-4.686-.848-4.686-2.9v-20.078h-5.846v20.123h.001zM115.496 121.656v-13.83c0-3.525 2.498-5.668 7.363-6.336.535-.045 1.07-.09 1.561-.09h11.064c.58 0 1.072.045 1.652.09 4.863.668 7.316 2.811 7.316 6.336v13.83c0 2.855-1.025 4.373-3.436 5.4l5.711 5.174h-6.736l-4.641-4.193-4.686.268h-6.246c-1.025 0-2.186-.133-3.391-.445-3.701-1.028-5.531-2.991-5.531-6.204zm6.291-.31c0 .178.09.355.135.58.312 1.605 1.828 2.498 4.148 2.498h5.266l-4.818-4.373h6.736l4.238 3.838c.805-.447 1.295-1.072 1.473-1.875.045-.178.045-.4.045-.58v-13.252c0-.178 0-.355-.045-.535-.312-1.516-1.828-2.363-4.104-2.363h-8.791c-2.588 0-4.283 1.115-4.283 2.898v13.164zM176.623 128.26h.848v-3.256h1.115v-.67h-3.123v.67h1.16v3.256zm6.469 0h.803v-3.926h-1.203l-.982 2.678-1.07-2.678h-1.16v3.926h.758v-2.988h.045l1.115 2.988h.58l1.115-2.988v2.988h-.001z'
              ></path>
            </g>
          </svg>
          &nbsp; MySQL
        </div>
        <div class='p-2 flex'>
          <svg
            class='w-[26px] h-[26px] text-cyan-600 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z' />
            <path d='M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z' />
          </svg>
          &nbsp;React
        </div>
        <div class='p-2 flex'>
          <svg
            class='fill-cyan-400'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            id='tailwind-css'
          >
            <path d='M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z'></path>
          </svg>
          Tailwind
        </div>
      </div>

      <div class='container items-center  bg-black mt-4'>
        <p class='text-white font-mono font-bold text-2xl align-middle'>
          &nbsp;Portfolio
        </p>
      </div>
      <div class='container justify-items-center font-mono text-white font-medium text-center dark:bg-gray-900 h-42 border-2 grid grid-cols-3 gap-3'>
        <div class='item p-2 m-1 hover:underline'>
          <a href='#dts-modal'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='size hover:fill-red-500'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776'
              />
            </svg>
            <p>Document Tracking System</p>
          </a>
        </div>
        <div class='item p-2 m-1 hover:underline'>
          {' '}
          <a href='#as-modal'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='size hover:fill-red-500'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776'
              />
            </svg>
            <p>Attendance System</p>
          </a>
        </div>
        <div class='item p-2 m-1 hover:underline'>
          <a href='#tts-modal'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='size hover:fill-red-500'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776'
              />
            </svg>
            <p>Travel and Tours System</p>
          </a>
        </div>
      </div>

      {/* Document Tracking System Modal */}
      <div
        id='dts-modal'
        class='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out'
      >
        <div class='bg-white rounded-lg shadow-lg w-1/3 p-6'>
          <div class='flex justify-between items-center border-b pb-3'>
            <h2 class='text-2xl font-semibold'>Document Tracking System</h2>
            <a href='#' class='text-gray-500 hover:text-gray-700'>
              &times;
            </a>
          </div>
          <div class='py-4'>
            <p>DTS sample modal using only Tailwind CSS.</p>
          </div>
          <div class='flex justify-end pt-4'>
            <a
              href='#'
              class='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
              Close
            </a>
          </div>
        </div>
      </div>

      {/* Attendance System Modal */}
      <div
        id='as-modal'
        class='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out'
      >
        <div class='bg-white rounded-lg shadow-lg w-1/3 p-6'>
          <div class='flex justify-between items-center border-b pb-3'>
            <h2 class='text-2xl font-semibold'>Attendance System</h2>
            <a href='#' class='text-gray-500 hover:text-gray-700'>
              &times;
            </a>
          </div>
          <div class='py-4'>
            <p>Attendance sytem sample modal using only Tailwind CSS.</p>
          </div>
          <div class='flex justify-end pt-4'>
            <a
              href='#'
              class='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
              Close
            </a>
          </div>
        </div>
      </div>

      {/* Travel and Tours System Modal */}
      <div
        id='tts-modal'
        class='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out'
      >
        <div class='bg-white rounded-lg shadow-lg w-1/3 p-6'>
          <div class='flex justify-between items-center border-b pb-3'>
            <h2 class='text-2xl font-semibold'>Travel and Tours System</h2>
            <a href='#' class='text-gray-500 hover:text-gray-700'>
              &times;
            </a>
          </div>
          <div class='py-4'>
            <p>Travel and tours sample modal using only Tailwind CSS.</p>
          </div>
          <div class='flex justify-end pt-4'>
            <a
              href='#'
              class='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
              Close
            </a>
          </div>
        </div>
      </div>

      <footer class='bg-white shadow dark:bg-gray-900 mt-5'>
        <div class='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <div class='sm:flex sm:items-center sm:justify-between'>
            <a
              href='https://flowbite.com/'
              class='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
            >
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                class='h-8'
                alt='Flowbite Logo'
              />
              <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Kidobashi
              </span>
            </a>
            <ul class='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
              <li>
                <a href='#' class='hover:underline me-4 md:me-6'>
                  About
                </a>
              </li>
              <li>
                <a href='#' class='hover:underline me-4 md:me-6'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' class='hover:underline me-4 md:me-6'>
                  Licensing
                </a>
              </li>
              <li>
                <a href='#' class='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{' '}
            <a href='https://flowbite.com/' class='hover:underline'>
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'my-indigo': '#4f45e5',
        myCrimson: '#b22222',
      },
      backgroundImage: {
        bg1: "url('https://www.pexels.com/photo/person-wearing-foo-dog-costume-2354073/')",
        bg2: "url('webdev2.png')",
      },
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
    },
  },
};
