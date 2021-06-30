const Triangles: React.FC<any> = () => {
  return (
    <svg
      className='cursor-pointer'
      width='120'
      height='100'
      viewBox='0 0 120 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='triangles' clip-path='url(#clip0)'>
        <g id='lightGroup'>
          <path
            className='animate-light1'
            opacity='0.7'
            d='M45 48.268C46.3333 49.0378 46.3333 50.9623 45 51.7321L10.5 71.6506C9.16666 72.4204 7.5 71.4582 7.5 69.9186V30.0814C7.5 28.5418 9.16667 27.5796 10.5 28.3494L45 48.268Z'
          />
        </g>
        <g id='darkGroup'>
          <path
            className='animate-dark1'
            opacity='0.7'
            d='M45 48.268C46.3333 49.0378 46.3333 50.9623 45 51.7321L10.5 71.6506C9.16666 72.4204 7.5 71.4582 7.5 69.9186V30.0814C7.5 28.5418 9.16667 27.5796 10.5 28.3494L45 48.268Z'
          />
          <path
            className='animate-dark2'
            opacity='0.7'
            d='M59 48.268C60.3333 49.0378 60.3333 50.9623 59 51.7321L24.5 71.6506C23.1667 72.4204 21.5 71.4582 21.5 69.9186V30.0814C21.5 28.5418 23.1667 27.5796 24.5 28.3494L59 48.268Z'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='120' height='100' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Triangles;
