import { EnvelopeClosedIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type ListContactProps = {
  contacts: readonly {
    title: string;
    url: string;
    iconName: string;
  }[];
};

export const ListContact = ({ contacts }: ListContactProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GitHubLogoIcon className="w-7 h-7" />;
      case "twitter":
        return <TwitterLogoIcon className="w-7 h-7" />;
      case "email":
        return <EnvelopeClosedIcon className="w-7 h-7" />;
    }
  };

  return contacts.map((contact) => {
    return (
      <div className="flex flex-row items-center text-sm space-x-2" key={contact.title}>
        {getIcon(contact.iconName)}
        <HoverCard>
          <HoverCardTrigger>
            <a href={contact.url}>{contact.title}</a>
          </HoverCardTrigger>
          <HoverCardContent>{contact.url}</HoverCardContent>
        </HoverCard>
      </div>
    );
  });
};
