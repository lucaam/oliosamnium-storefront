const BackgroundVideo = () => (
  <video
    autoPlay
    muted
    loop
    className="fixed inset-0 w-full h-full object-cover -z-10"
    style={{ pointerEvents: "none" }}
  >
    <source src="/video/sunnn-video-preview.mp4" type="video/mp4" />
  </video>
)

export default BackgroundVideo