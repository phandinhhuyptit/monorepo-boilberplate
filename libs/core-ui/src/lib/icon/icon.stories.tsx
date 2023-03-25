import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect } from 'react';
import { Input } from '../input/input';
import { Icon } from './icon';
import { ICONS_NAME } from '../../../../shared/constants/src/index';
import { IconName } from '@monorepo-boiberplate/shared/type';
export default {
  component: Icon,
  title: 'Widgets/Icon',
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  useEffect(() => {
    const filter = document.getElementById('filter-icon');
    const listIcons = document.getElementById('list-icons');

    filter?.addEventListener('keyup', function (e) {
      const target = e.target as HTMLInputElement;

      const text = target.value;

      const allIcons = listIcons?.querySelectorAll('li');

      if (text.trim() !== '') {
        allIcons?.forEach(
          (el) => ((el as HTMLLIElement).style.display = 'none')
        );

        const filteredIcons = listIcons?.querySelectorAll(
          `li[data-key*=${text}]`
        );

        filteredIcons?.forEach(
          (el) => ((el as HTMLLIElement).style.display = 'block')
        );
      } else {
        allIcons?.forEach(
          (el) => ((el as HTMLLIElement).style.display = 'block')
        );
      }
    });
  }, []);
  const nameIcons = Object.keys(ICONS_NAME);
  return (
    <>
      <Input size='medium' color='primary' label='filter-icon' id="filter-icon"/>
      <ol
        id="list-icons"
        className="grid grid-cols-6 gap-5 bg-slate-200 p-10 list-decimal"
      >
        {nameIcons.map((name) => (
          <li data-key={ICONS_NAME[name as keyof typeof ICONS_NAME]}>
            <div className="flex items-center gap-4">
              {name}
              <Icon name={name as IconName} style={{ height: 24, width: 24 }} />
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {};