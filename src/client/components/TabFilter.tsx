import * as Tabs from '@radix-ui/react-tabs';

import { TodoList } from './TodoList';

export const TabFilter = () => {

  return (

    <Tabs.Root defaultValue="tab1" orientation="vertical">
      <Tabs.List aria-label="tabs example">
        <Tabs.Trigger
          className='data-[state=active]:text-white data-[state=active]:bg-slate-700 border border-gray-200 text-slate-700  font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          value="tab1"
        >
          All
        </Tabs.Trigger>
        <Tabs.Trigger
          className='data-[state=active]:text-white data-[state=active]:bg-slate-700 border border-gray-200 text-slate-700  font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          value="tab2"
        >
          Pending
        </Tabs.Trigger>
        <Tabs.Trigger
          className='data-[state=active]:text-white data-[state=active]:bg-slate-700 border border-gray-200 text-slate-700  font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          value="tab3"
        >
          Completed
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div className="pt-10">
          <TodoList filter={['completed', 'pending']} />
        </div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div className="pt-10">
          <TodoList filter={['pending']} />
        </div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div className="pt-10">
          <TodoList filter={['completed']} />
        </div>
      </Tabs.Content>
    </Tabs.Root>
  )
}