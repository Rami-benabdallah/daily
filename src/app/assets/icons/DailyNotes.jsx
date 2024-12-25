import * as React from "react"
const DailyNotes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3v2m3-2v2m3-2v2m-2 4H9m6 4H9m-.8 8h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 19.48 19 18.92 19 17.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 4 16.92 4 15.8 4H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 5.52 5 6.08 5 7.2v10.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 21 7.08 21 8.2 21Z"
    />
  </svg>
)
export default DailyNotes
