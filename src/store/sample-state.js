export default {
  caseNumber: '21-12345',
  caption: 'United States v. Timothy Carpenter',
  parties: [
    { partyName: 'United States', partyDesignation: 'Government' },
    { partyName: 'Timothy Carpenter', partyDesignation: 'Defendant' },
  ],
  events: [
    {
      date: {
        month: '09',
        day: '26',
        year: '2016',
      },
      description: 'Notice of Appeal filed',
    },
  ],
};

export const remandState = {
  caseNumber: '21-12345',
  caption: 'United States v. Timothy Carpenter',
  parties: [
    { partyName: 'United States', partyDesignation: 'Government' },
    { partyName: 'Timothy Carpenter', partyDesignation: 'Defendant' },
  ],
  events: [
    {
      date: {
        month: '09',
        day: '26',
        year: '2016',
      },
      description: 'Notice of Appeal filed',
    },
    {
      date: {
        month: '06',
        day: '30',
        year: '2021',
      },
      description:
        'Order remanding the case to the district court for further proceedings',
    },
  ],
};
