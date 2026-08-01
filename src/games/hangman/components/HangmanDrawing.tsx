interface Props {
  numberOfIncorrectGuesses: number;
}

function HangmanDrawing({ numberOfIncorrectGuesses }: Props) {
  const HEAD = (
    <div
      className="z-50"
      style={{
        height: "60px",
        width: "60px",
        borderRadius: "100%",
        border: "10px solid oklch(53.2% 0.157 131.589)",
        position: "absolute",
        marginLeft: "285px",
        marginTop: "50px",
      }}
    />
  );

  const BODY = (
    <div
      style={{
        height: "110px",
        width: "10px",
        background: "oklch(53.2% 0.157 131.589)",
        position: "absolute",
        marginLeft: "310px",
        marginTop: "110px",
      }}
    />
  );

  const LEFT_ARM = (
    <div
      style={{
        height: "10px",
        width: "80px",
        background: "oklch(53.2% 0.157 131.589)",
        position: "absolute",
        marginLeft: "243px",
        marginTop: "141px",
        rotate: "-30deg",
      }}
    />
  );

  const RIGHT_ARM = (
    <div
      style={{
        height: "10px",
        width: "80px",
        background: "oklch(53.2% 0.157 131.589)",
        position: "absolute",
        marginLeft: "307px",
        marginTop: "141px",
        rotate: "+30deg",
      }}
    />
  );

  const LEFT_LEG = (
    <div
      style={{
        height: "10px",
        width: "90px",
        background: "oklch(53.2% 0.157 131.589)",
        position: "absolute",
        marginLeft: "242px",
        marginTop: "246.5px",
        rotate: "-50deg",
      }}
    />
  );

  const RIGHT_LEG = (
    <div
      style={{
        height: "10px",
        width: "90px",
        background: "oklch(53.2% 0.157 131.589)",
        position: "absolute",
        marginLeft: "298px",
        marginTop: "246.5px",
        rotate: "+50deg",
      }}
    />
  );

  const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

  return (
    // Scaled image down, shrunk to the top rather than center
    <div className="relative h-100 w-87.5 scale-[0.5] md:scale-[0.60] origin-top -mb-46 md:-mb-33 transition-all duration-300">
      {BODY_PARTS.slice(0, numberOfIncorrectGuesses)}
      <div // top horizontal line
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div // small vertical line
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          marginLeft: "310px",
        }}
      />
      <div // slant
        style={{
          height: "110px",
          width: "10px",
          background: "black",
          position: "absolute",
          marginLeft: "160px",
          marginTop: "-20px",
          rotate: "+45deg",
        }}
      />
      <div // big vertical line
        style={{
          height: "380px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div // bottom line
        style={{ height: "10px", width: "250px", background: "black" }}
      />
    </div>
  );
}

export default HangmanDrawing;
