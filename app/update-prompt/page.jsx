"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Form } from "@/components/Form";

const EditPrompt = () => {
  const [Submitting, setSubmitting] = useState(false);
  const [Post, setPost] = useState({ prompt: "", tag: "" });
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const { data: session } = useSession();
  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Missing PromptId!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: Post.prompt,
          tag: Post.tag,
        }),
      });
      console.log("worki");
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error + " 0000");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);
  return (
    <Form
      type="Edit"
      post={Post}
      setPost={setPost}
      Submitting={Submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPrompt;
