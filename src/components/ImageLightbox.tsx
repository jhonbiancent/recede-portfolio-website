"use client";
import Image from "next/image";
import Modal from "./Modal";
import styles from "./Modal.module.css";

type ImageLightboxProps = {
  imageSrc: string | null;
  onClose: () => void;
};

export default function ImageLightbox({
  imageSrc,
  onClose,
}: ImageLightboxProps) {
  if (!imageSrc) return null;

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className={styles.lightboxWrapper}>
        <Image
          src={imageSrc}
          alt="Expanded image"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </Modal>
  );
}
