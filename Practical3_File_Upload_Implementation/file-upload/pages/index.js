import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [progress, setProgress] = useState(0);

  const onSubmit = async (data) => {
    const file = data.file[0];

    if (!file) return alert("No file selected");

    if (file.size > 2 * 1024 * 1024) {
      return alert("File must be less than 2MB");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (data) => {
          setProgress(Math.round((data.loaded * 100) / data.total));
        },
      });

      alert("Upload successful!");
      setProgress(0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>📂 File Upload System</h1>

        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <input type="file" {...register("file")} style={styles.input} />

          <button type="submit" style={styles.button}>
            Upload File
          </button>
        </form>

        {/* Progress Bar */}
        <div style={styles.progressContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <p style={styles.progressText}>{progress}% Uploaded</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
    fontFamily: "Arial",
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center",
  },

  title: {
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  button: {
    padding: "10px",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  progressContainer: {
    marginTop: "20px",
    width: "100%",
    height: "10px",
    background: "#ddd",
    borderRadius: "5px",
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    background: "#0070f3",
    transition: "width 0.3s ease",
  },

  progressText: {
    marginTop: "10px",
    fontSize: "14px",
  },
};