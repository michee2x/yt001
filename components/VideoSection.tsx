const VideoSection = () => {
  return (
    <section
      id="video"
      className="py-24 md:py-32 px-6 md:px-10 relative overflow-hidden bg-studio-gray/20"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Label */}
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-6">
          Video
        </p>

        <p className="text-parchment-dim text-sm md:text-base font-light mb-10 max-w-xl mx-auto">
          Take nine minutes to get a feel for the ideas in the book.
        </p>

        <div
          className="relative w-full aspect-video overflow-hidden border border-gold/20 mb-10"
          style={{ boxShadow: "0 0 60px rgba(197,160,78,0.08)" }}
        >
          <video
            src="https://res.cloudinary.com/dsps3itap/video/upload/yt-001_compressed_vo8iht.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="Book preview video"
            className="h-full w-full bg-black object-contain"
          />
        </div>

        {/* CTA */}
        <a
          href="https://selar.com/8ai877i268"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex text-base px-8 py-4"
        >
          <span>Get the Book</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
