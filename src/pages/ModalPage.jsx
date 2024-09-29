import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal((current) => (current = false));
  };

  const handleClick = () => {
    setShowModal((current) => (current = true));
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Here is an important agreement for you to accept.
    </Modal>
  );

  return (
    <div className="">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        similique eveniet? Beatae numquam fugiat facere ratione itaque,
        assumenda ut dolorem dolorum voluptatibus? Corrupti omnis molestiae
        autem, laudantium labore nulla sed? Provident ullam nemo itaque aliquam
        sint quas est! At, minima iure. Quas magnam debitis excepturi ducimus
        voluptatum quam porro quidem accusantium cumque tempore, ipsam placeat
        unde nobis laborum recusandae vel! Error consequuntur dolore dolores
        modi velit. Animi facilis, minus blanditiis voluptatum iure dolore
        reiciendis libero nisi adipisci vitae. Dignissimos assumenda atque nulla
        quisquam laborum praesentium commodi expedita consectetur quo quis? Quod
        nostrum debitis libero iste minima explicabo dicta ullam, id amet? At
        reiciendis qui accusamus unde, asperiores delectus laudantium magni
        placeat adipisci odio cupiditate sequi consequuntur maiores, illum
        voluptatum minus? Tempora ad reiciendis, magnam corporis esse quaerat
        blanditiis eius cum corrupti unde vero distinctio eveniet hic ipsum
        commodi veritatis rerum, excepturi laboriosam, dignissimos nisi.
        Corporis, at nostrum. Quasi, iure asperiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        similique eveniet? Beatae numquam fugiat facere ratione itaque,
        assumenda ut dolorem dolorum voluptatibus? Corrupti omnis molestiae
        autem, laudantium labore nulla sed? Provident ullam nemo itaque aliquam
        sint quas est! At, minima iure. Quas magnam debitis excepturi ducimus
        voluptatum quam porro quidem accusantium cumque tempore, ipsam placeat
        unde nobis laborum recusandae vel! Error consequuntur dolore dolores
        modi velit. Animi facilis, minus blanditiis voluptatum iure dolore
        reiciendis libero nisi adipisci vitae. Dignissimos assumenda atque nulla
        quisquam laborum praesentium commodi expedita consectetur quo quis? Quod
        nostrum debitis libero iste minima explicabo dicta ullam, id amet? At
        reiciendis qui accusamus unde, asperiores delectus laudantium magni
        placeat adipisci odio cupiditate sequi consequuntur maiores, illum
        voluptatum minus? Tempora ad reiciendis, magnam corporis esse quaerat
        blanditiis eius cum corrupti unde vero distinctio eveniet hic ipsum
        commodi veritatis rerum, excepturi laboriosam, dignissimos nisi.
        Corporis, at nostrum. Quasi, iure asperiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        similique eveniet? Beatae numquam fugiat facere ratione itaque,
        assumenda ut dolorem dolorum voluptatibus? Corrupti omnis molestiae
        autem, laudantium labore nulla sed? Provident ullam nemo itaque aliquam
        sint quas est! At, minima iure. Quas magnam debitis excepturi ducimus
        voluptatum quam porro quidem accusantium cumque tempore, ipsam placeat
        unde nobis laborum recusandae vel! Error consequuntur dolore dolores
        modi velit. Animi facilis, minus blanditiis voluptatum iure dolore
        reiciendis libero nisi adipisci vitae. Dignissimos assumenda atque nulla
        quisquam laborum praesentium commodi expedita consectetur quo quis? Quod
        nostrum debitis libero iste minima explicabo dicta ullam, id amet? At
        reiciendis qui accusamus unde, asperiores delectus laudantium magni
        placeat adipisci odio cupiditate sequi consequuntur maiores, illum
        voluptatum minus? Tempora ad reiciendis, magnam corporis esse quaerat
        blanditiis eius cum corrupti unde vero distinctio eveniet hic ipsum
        commodi veritatis rerum, excepturi laboriosam, dignissimos nisi.
        Corporis, at nostrum. Quasi, iure asperiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        similique eveniet? Beatae numquam fugiat facere ratione itaque,
        assumenda ut dolorem dolorum voluptatibus? Corrupti omnis molestiae
        autem, laudantium labore nulla sed? Provident ullam nemo itaque aliquam
        sint quas est! At, minima iure. Quas magnam debitis excepturi ducimus
        voluptatum quam porro quidem accusantium cumque tempore, ipsam placeat
        unde nobis laborum recusandae vel! Error consequuntur dolore dolores
        modi velit. Animi facilis, minus blanditiis voluptatum iure dolore
        reiciendis libero nisi adipisci vitae. Dignissimos assumenda atque nulla
        quisquam laborum praesentium commodi expedita consectetur quo quis? Quod
        nostrum debitis libero iste minima explicabo dicta ullam, id amet? At
        reiciendis qui accusamus unde, asperiores delectus laudantium magni
        placeat adipisci odio cupiditate sequi consequuntur maiores, illum
        voluptatum minus? Tempora ad reiciendis, magnam corporis esse quaerat
        blanditiis eius cum corrupti unde vero distinctio eveniet hic ipsum
        commodi veritatis rerum, excepturi laboriosam, dignissimos nisi.
        Corporis, at nostrum. Quasi, iure asperiores?
      </p>
    </div>
  );
}
