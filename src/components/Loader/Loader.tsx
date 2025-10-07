import { useEffect } from "react";

export const Loader = () => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<>
			<div className="loader-overlay">
				<div className="loader"></div>
			</div>

			<style>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .loader {
          width: 120px;
          height: 22px;
          border-radius: 20px;
          color: #514b82;
          border: 2px solid;
          position: relative;
          z-index: 2;
        }

        .loader::before {
          content: "";
          position: absolute;
          margin: 2px;
          inset: 0 100% 0 0;
          border-radius: inherit;
          background: currentColor;
          animation: l6 2s infinite;
        }

        @keyframes l6 {
          100% { inset: 0 }
        }
      `}</style>
		</>
	);
};
