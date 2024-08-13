import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { CreateChatDto } from "@/common/types/chat/create-chat.dto";
import { Input } from "@/common/components/Input/Input";
import { Button } from "@/common/components/Button/Button";

type CreateChatFormProps = {
  onSubmit: (data: CreateChatDto) => void;
  closeModal?: () => void;
};

export const CreateChatForm = ({
  onSubmit,
  closeModal,
}: CreateChatFormProps) => {
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

  const handleOnSubmit = async (data: CreateChatDto) => {
    onSubmit?.(data);
    reset();

    closeModal?.();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleOnSubmit)}
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
