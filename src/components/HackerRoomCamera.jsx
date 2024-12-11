import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const HackerRoomCamera = ({ children, isMobile }) => {
  const group_ref = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    if (!isMobile) {
      easing.dampE(
        group_ref.current.rotation,
        [-state.pointer.y / 2, state.pointer.x / 3, 0],
        0.1,
        delta
      );
    }
  });

  return <group ref={group_ref}>{children}</group>;
};

export default HackerRoomCamera;
