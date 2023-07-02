const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
const { program } = require("commander");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContats = await listContacts();
      return console.table(allContats);
    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
