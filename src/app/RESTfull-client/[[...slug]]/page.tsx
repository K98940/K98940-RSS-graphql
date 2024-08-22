'use client';

import { useState, useContext } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { clientMenu } from '@/constants/client';
import { Button, Descriptions, Flex } from 'antd';
import { InputUrl, Navigation, SelectMethod } from '@/components';
import { FormBody, FormParams, FormHeaders } from '@/components/client/forms';
import { LanguageContext } from '@/providers/language';

export default function Page(): JSX.Element {
  const [currentTab, setCurrentTab] = useState(clientMenu[0].key);
  const { t } = useContext(LanguageContext);

  const forms = {
    [clientMenu[0].key]: FormParams(t),
    [clientMenu[1].key]: FormHeaders(t),
    [clientMenu[2].key]: FormBody(t),
  };

  return (
    <div>
      <article style={{ padding: '1em' }}>
        <Flex gap="small" style={{ marginBottom: '1em' }}>
          <SelectMethod />
          <InputUrl />
          <Button type="primary">{t.send}</Button>
        </Flex>
        <Navigation setCurrentTab={setCurrentTab} currentTab={currentTab} />
        {forms[currentTab]}
        <Descriptions
          title={t.response}
          className="Response"
          bordered={true}
          size="small"
          column={1}
        >
          <Descriptions.Item label={t.status}>200 OK</Descriptions.Item>
          <Descriptions.Item
            label={t.body}
            contentStyle={{
              height: '10em',
              width: '90%',
            }}
          >
            <TextArea
              placeholder={t.responseBody}
              disabled={true}
              style={{
                height: '100%',
              }}
            />
          </Descriptions.Item>
        </Descriptions>
      </article>
    </div>
  );
}
