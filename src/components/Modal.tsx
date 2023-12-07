import { useState } from "react";
import {
  Button,
  Form,
  Modal,
  Input,
  Flex,
  Radio,
  Select,
  DatePicker,
  TimePicker,
  Upload,
  message,
} from "antd";
import type { UploadProps } from "antd/lib/upload";
import { UploadOutlined } from "@ant-design/icons";

const CustomModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [form] = Form.useForm();
  const [eventName, setEventName] = useState("");
  const [isEvent, setIsEvent] = useState(false);
  const [location, setLocation] = useState("");
  const [isLocation, setIsLocation] = useState(false);
  const [guests, setGuests] = useState("");
  const [isGuests, setIsGuests] = useState(false);

  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleFormSubmit = (values: any) => {
    console.log(values);
    onClose();
    form.resetFields();
  };

  return (
    <Modal
      title="Create Event"
      open={isOpen}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
    >
      <Form layout="vertical" onFinish={handleFormSubmit} form={form}>
        <Form.Item
          name="eventName"
          label={<p className="form-item-label">Event Name</p>}
        >
          <Flex justify="space-between" align="center" className="form-item">
            <Input
              placeholder="Enter event Name"
              bordered={false}
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <Button type="default" onClick={() => setIsEvent(true)}>
              Add description
            </Button>
          </Flex>
        </Form.Item>
        {isEvent && <p>{eventName}</p>}
        <Flex justify="space-between" align="center">
          <Form.Item
            name="date"
            label={<p className="form-item-label">Date</p>}
          >
            <DatePicker className="form-item" />
          </Form.Item>
          <Form.Item
            name="time"
            label={<p className="form-item-label">Time</p>}
          >
            <TimePicker className="form-item" />
          </Form.Item>
          <Form.Item
            name="duration"
            label={<p className="form-item-label">Duration</p>}
          >
            <Select options={[{ value: "25m", label: "25 minutes" }]} />
          </Form.Item>
        </Flex>
        <Form.Item
          name="location"
          label={<p className="form-item-label">Location</p>}
        >
          <Flex justify="space-between" align="center" className="form-item">
            <Input
              placeholder="Enter location"
              bordered={false}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button type="default" onClick={() => setIsLocation(true)}>
              Set meeting room
            </Button>
          </Flex>
        </Form.Item>
        {isLocation && <p>{location}</p>}
        <Form.Item
          name="email"
          label={<p className="form-item-label">Add guests</p>}
        >
          <Flex justify="space-between" align="center" className="form-item">
            <Input
              placeholder="contact@example.com"
              bordered={false}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            <Button type="default" onClick={() => setIsGuests(true)}>
              Add
            </Button>
          </Flex>
        </Form.Item>
        {isGuests && <p>{guests}</p>}
        <Flex justify="flex-start" align="center">
          <Form.Item
            name="notification"
            label={<p className="form-item-label">Notification</p>}
          >
            <div className="form-item">
              <Radio.Group className="form-item">
                <Radio.Button value="Email">Email</Radio.Button>
                <Radio.Button value="Slack">Slack</Radio.Button>
              </Radio.Group>
            </div>
          </Form.Item>
          <Form.Item
            name="reminder"
            label={<p className="form-item-label">Set Reminder</p>}
            style={{ marginLeft: "20px", width: "150px" }}
          >
            <Select
              defaultValue={{
                value: "1 hour",
                label: "1 hour before event",
              }}
              options={[
                { value: "1 hour", label: "1 hour before event" },
                { value: "2 hour", label: "2 hour before event" },
                { value: "1 day", label: "1 day before event" },
              ]}
            />
          </Form.Item>
        </Flex>
        <Form.Item
          label={<p className="form-item-label">Upload attachments</p>}
        >
          <div className="form-item">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        </Form.Item>
        <Flex justify="flex-end" align="center">
          <Button type="default" style={{ marginRight: "20px" }}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Create Event
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export default CustomModal;
