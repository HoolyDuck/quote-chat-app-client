import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { CreateChatDto } from "@/common/types/chat/create-chat.dto";
import { useCreateChatMutation } from "@/lib/api/chat/chatApi";
import { Input } from "@/common/components/Input/Input";
import { toast } from "react-toastify";
import { Button } from "@/common/components/Button/Button";
import { useUpdateChats } from "@/common/hooks/useUpdateChats";

type CreateChatFormProps = {
  onSuccessfulSubmit: () => void;
};

export const CreateChatForm = ({ onSuccessfulSubmit }: CreateChatFormProps) => {
  const [createChat] = useCreateChatMutation();
  const { addToChatList } = useUpdateChats();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateChatDto>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data: CreateChatDto) => {
    try {
      const result = await createChat(data).unwrap();
      addToChatList(result);

      toast.success("Chat created successfully");
      reset();
      onSuccessfulSubmit();
    } catch (error) {
      toast.error("Failed to create chat");
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className={styles.label}>
        <span>First Name</span>
        <p className={styles.error}>{errors.firstName?.message}</p>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
          render={({ field }) => <Input {...field} />}
        />
      </label>

      <label className={styles.label}>
        <span>Last Name</span>
        <p className={styles.error}>{errors.lastName?.message}</p>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Last name is required" }}
          render={({ field }) => <Input {...field} />}
        />
      </label>

      <Button
        type="submit"
        width="full"
      >
        Create Chat
      </Button>
    </form>
  );
};
