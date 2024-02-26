export const dashboard = [
  {
    type: 'website',
    title: 'Website',
    description: '',
    canBeDisabled: true,
    enabled: true,
    hidden: false,
    links: [
      {
        icon: '/images/icons/magic-wand.svg',
        title: 'Edit Website',
        href: '/edit-website',
      },
      {
        icon: '/images/icons/stereo-glasses.svg',
        title: 'View Website',
        href: '/preview-website',
      },
    ],
  },
  {
    type: 'registry',
    title: 'Registry',
    description: '',
    canBeDisabled: true,
    enabled: true,
    hidden: false,
    links: [
      {
        icon: '/images/icons/gift-thin.svg',
        title: 'Gift Registry',
        href: '/gift-registry',
      },
    ],
  },
  {
    type: 'rsvp',
    title: 'Guest List',
    description: '',
    canBeDisabled: true,
    enabled: true,
    hidden: false,
    links: [
      {
        icon: '/images/icons/guests.svg',
        title: 'Guest List',
        href: '/guest-list',
      },
      {
        icon: '/images/icons/rsvp.svg',
        title: 'Manage RSVP',
        href: '/rsvp',
      },
    ],
  },
  {
    type: 'invitations',
    title: 'Invitations',
    description: '',
    canBeDisabled: true,
    enabled: true,
    hidden: false,
    links: [
      {
        icon: '/images/icons/gift-card.svg',
        title: 'Invitations',
        href: '/invitations',
      },
      {
        icon: '/images/icons/std.svg',
        title: 'Save the Dates',
        href: '/save-the-dates',
      },
      {
        icon: '/images/icons/file-pencil.svg',
        title: 'Edit Invitation',
        href: '/edit-card',
      },
      {
        icon: '/images/icons/send.svg',
        title: 'Send Invitation',
        href: '/send',
      },
    ],
  },
  {
    type: 'eventDetails',
    title: 'Event Details',
    description: '',
    canBeDisabled: false,
    links: [
      {
        icon: '/images/icons/table-options.svg',
        title: 'Edit Event Details',
        href: '/event-details',
      },
    ],
  },
  {
    type: 'suppliers',
    title: 'Suppliers',
    description: 'For wedding only',
    canBeDisabled: false,
    links: [
      {
        icon: '/images/icons/building-store.svg',
        title: 'Suppliers List',
        href: '/suppliers',
      },
      {
        icon: '/images/icons/tag-starred.svg',
        title: 'Suggestions',
        href: '/suppliers-suggestions',
      },
    ],
  },
  {
    type: 'requirements',
    title: 'Requirements',
    description: 'For wedding only',
    canBeDisabled: false,
    links: [
      {
        icon: '/images/icons/list-checks-thin.svg',
        title: 'Checklist',
        href: '/checklist',
      },
    ],
  },
];
