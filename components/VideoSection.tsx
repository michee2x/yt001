"use client";

import { useEffect, useRef, useState } from "react";
import type Hls from "hls.js";

const streamUrl =
  process.env.NEXT_PUBLIC_CLOUDINARY_HLS_URL ||
  "https://res.cloudinary.com/dsps3itap/video/upload/sp_auto/yt-001_compressed_vo8iht.m3u8";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playbackError, setPlaybackError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !streamUrl) return;

    let hls: Hls | null = null;
    let disposed = false;
    const handleVideoError = () => {
      setPlaybackError(
        "The video could not be loaded. Please try again later.",
      );
    };

    video.addEventListener("error", handleVideoError);

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      return () => {
        video.removeEventListener("error", handleVideoError);
        video.removeAttribute("src");
        video.load();
      };
    }

    void import("hls.js")
      .then(({ default: HlsPlayer }) => {
        if (disposed) return;
        if (!HlsPlayer.isSupported()) {
          setPlaybackError("This browser does not support HLS playback.");
          return;
        }

        hls = new HlsPlayer();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
        hls.on(HlsPlayer.Events.ERROR, (_event, data) => {
          if (!data.fatal) return;
          if (data.type === HlsPlayer.ErrorTypes.NETWORK_ERROR) {
            hls?.startLoad();
          } else if (data.type === HlsPlayer.ErrorTypes.MEDIA_ERROR) {
            hls?.recoverMediaError();
          } else {
            setPlaybackError(
              "The video could not be loaded. Please try again later.",
            );
          }
        });
      })
      .catch(() => {
        if (!disposed)
          setPlaybackError("The video player could not be initialized.");
      });

    return () => {
      disposed = true;
      video.removeEventListener("error", handleVideoError);
      hls?.destroy();
    };
  }, []);

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
          {streamUrl ? (
            <>
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                aria-label="Book preview video"
                className="h-full w-full bg-black object-contain"
              />
              {playbackError && (
                <p
                  role="alert"
                  className="absolute inset-x-0 bottom-14 bg-black/80 px-4 py-3 text-sm text-parchment"
                >
                  {playbackError}
                </p>
              )}
            </>
          ) : (
            <div className="grid h-full place-items-center bg-obsidian px-6">
              <p className="max-w-md text-sm text-parchment-dim">
                Video preview coming soon.
              </p>
            </div>
          )}
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
