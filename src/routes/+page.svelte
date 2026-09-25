<script>
    import {ArrowUp} from "@lucide/svelte";
    import * as InputGroup from "$lib/components/ui/input-group/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import {Button} from "$lib/components/ui/button/index.js";
</script>

<InputGroup.Root>
    <InputGroup.Addon align="inline-start">
        <Select.Root type="single">
            <Select.Trigger>
                <Select.Value placeholder="PRFX" />
            </Select.Trigger>
            <Select.Content>
                <Select.Item value="ECOM">ECOM</Select.Item>
                <Select.Item value="TEC">TEC</Select.Item>
                <Select.Item value="ICT">ICT</Select.Item>
                <Select.Item value="SNOW">SNOW</Select.Item>
            </Select.Content>
        </Select.Root>
    </InputGroup.Addon>
    <InputGroup.Input placeholder="3210" />
    <InputGroup.Addon align="inline-end">
        <Button size="icon-lg"><ArrowUp /></Button>
    </InputGroup.Addon>
</InputGroup.Root>